export const userQuery = (mobile: string) => `
  -- Get General User Data from mobile
  Declare @mobile varchar(20) =  '${mobile}'

  -- Query
  select 
  tblPosCustomers_ID,
  PartnerShipCode,
  Mobile,
  Name,
  FamilyName,
  Case when Sexuality = 1 THEN 1 Else 0 END AS Gender,
  CusType,
  Email,
  BirthDate,
  ISNULL(ISNULL(C.StartBuyValue,0)+Pay.Pay,0) AS Pay
  from tblPosCustomers AS C
  LEFT JOIN
  (
  select T.PosCustomers_ID,SUM(P.PayValue)AS Pay from tblPosTransactions AS T
  INNER JOIN tblPosTransactionsPayment AS P ON T.tblPosTransactions_ID=P.Transactions_ID
  where T.Status=2 and P.tblPosTransactionsPaymentType_ID not in (4,9,32)
  Group by T.PosCustomers_ID
  )Pay ON C.tblPosCustomers_ID=Pay.PosCustomers_ID
  where C.IsDeleted=0 and Mobile=@mobile
  `;

export const updateUserQuery = ({
  ERPCustomers_ID,
  Name,
  Family,
  Email,
  Gender,
  BirthDate,
}) => `
  -- Update Customers Data from ERPCustomers_ID
  Declare @ERPCustomers_ID bigint = '${ERPCustomers_ID}'
  Declare @Name Nvarchar(50) = '${Name}'
  Declare @Family Nvarchar(50) = '${Family}'
  Declare @Email Nvarchar(100) = '${Email}'
  Declare @Gender bit = '${Gender}'
  Declare @BirthDate Date = '${BirthDate}'

  -- Query
  Update tblPosCustomers set 
  UpdateDate=GETDATE(),UpdateUserID=3335
  ,Name=@Name,FamilyName=@Family,Email=@Email
  ,Sexuality=@Gender,BirthDate=@BirthDate
  where IsDeleted=0 and tblPosCustomers_ID=@ERPCustomers_ID

  SELECT 

  tblPosCustomers_ID,
  Name,
  FamilyName AS Family,
  Email,
  Sexuality AS Gender,
  BirthDate
  
  FROM tblPosCustomers where IsDeleted=0 and tblPosCustomers_ID=@ERPCustomers_ID
  `;

export const createUserQuery = ({ Mobile, Comment, CusType, CusID }) => `
  Declare
  @Mobile varchar(11) = '${Mobile}',
  @Comment nvarchar(100) = '${Comment}',
  @custype int = ${CusType},
  @CusID bigint = ${CusID}
  
  exec [dbo].[PosCustomersIns]
  @Mobile=@Mobile,@Comment=@Comment,@custype=1,@CusID=@CusID output
  `;

export const getCustomersQuery = () => `
  Select
  tblPosCustomerTypes_ID,
  CTypeName,
  AdditionClubDiscount
  from tblPosCustomerTypes
`;

export const getUserTransactionsListQuery = (tblPosCustomers_ID) => `
  Declare @tblPosCustomers_ID as bigint = ${tblPosCustomers_ID}
  select 
  T.tblPosTransactions_ID,
  T.TransactionID,
  T.ArchiveDate,
  ISNULL(Pay.Pay,0) AS Pay,
  Items.BarcodeMain_IDList,
  Items.QTY
  from tblPosTransactions AS T 
  INNER JOIN 
      (
      Select TI.Transactions_ID,STRING_AGG(BarcodeMain_ID,',')  BarcodeMain_IDList ,SUM(K_Amount) QTY  
      from tblPosTransactionsItems AS TI
      Group by TI.Transactions_ID
      )Items ON Items.Transactions_ID=T.tblPosTransactions_ID
  LEFT JOIN
      (select P.Transactions_ID,SUM(P.PayValue) AS Pay 
      from tblPosTransactionsPayment AS P
      where 
      P.tblPosTransactionsPaymentType_ID not in (4,9,32)
      Group by P.Transactions_ID
      ) AS Pay ON T.tblPosTransactions_ID=Pay.Transactions_ID
  Where T.Status=2 and T.PosCustomers_ID=@tblPosCustomers_ID
`;

export const getInvoiceDetailsQuery = (tblPosTransactions_ID) => `
  Declare @tblPosTransactions_ID AS Bigint = '${tblPosTransactions_ID}'

  select 
  T.tblPosTransactions_ID ,
  T.TransactionID,
  T.ArchiveDate,
  C.Name,
  C.FamilyName,
  T.SumGetPrice AS TotalInvoicePrice,
  Pay.PayDetailsList,
  Items.BarcodeMain_IDList
  from tblPosTransactions AS T
  INNER JOIN tblPosCustomers AS C ON T.PosCustomers_ID=C.tblPosCustomers_ID
  INNER JOIN 
      (
      Select TI.Transactions_ID,STRING_AGG(BarcodeMain_ID,',')  BarcodeMain_IDList ,SUM(K_Amount) QTY  
      from tblPosTransactionsItems AS TI
      Group by TI.Transactions_ID
      )Items ON Items.Transactions_ID=T.tblPosTransactions_ID
  LEFT JOIN
      (
      Select 
      P.Transactions_ID,
      STRING_AGG(CONCAT(PT.Title,':',P.PayValue),',') PayDetailsList
      FROM
      tblPosTransactionsPayment AS P
      INNER JOIN tblPosTransactionsPaymentType AS PT ON P.tblPosTransactionsPaymentType_ID=PT.tblPosTransactionsPaymentType_ID
      Group by P.Transactions_ID
      ) AS Pay ON Pay.Transactions_ID=T.tblPosTransactions_ID
  where T.tblPosTransactions_ID=@tblPosTransactions_ID
`;

export const getUserGiftcardsQuery = (tblPosCustomers_ID) => `
  Declare @tblPosCustomers_ID as bigint = '${tblPosCustomers_ID}'
  
  select 
  G.GCNum,G.GCBalance,G.ExpDate,GG.GCGroupName,GG.CodingDepartmentCode,GG.CodingDepartmentCount,GG.MinPriceForUser
  
  from 
  tblPosGiftCardBalance AS G
  
  INNER JOIN tblPosGiftCardGroups AS GG ON G.GcGroupNameID=GG.tblPosGiftCardGroups_ID
  
  where G.PosCustomerID=@tblPosCustomers_ID
  and G.IsActive=0 and G.ExpDate>GETDATE() and GG.GiftCardGroupTypes_ID not in (10,8,7)
`;
