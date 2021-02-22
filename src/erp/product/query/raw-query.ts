export const getProductsWithtfilterQuery = ({
  TSCodeID = 0,
  PageNumber,
  PerPage,
  OrderBy,
  Filters: {
    BarcodeMain_ID,
    Style,
    SKU,
    Barcode,
    Color,
    ColorFamily,
    ColorEnTitle,
    Size,
    CategoriesTitle,
    ProductName,
    ProductStyletitle,
    ProductStyleTitleEN,
    MaterialTitle,
    SexTitle,
    SeasonCode,
    SeasonCode2,
    ProductAge,
    ProductCutting,
    OrgPrice,
    SalePrice,
    Brand,
    ProductGroup,
    ProductCategory,
  },
}) => `
Declare @TSCodeID BigInt = ${TSCodeID}
Declare @Page int = ${PageNumber}
Declare @PerPage int = ${PerPage}
Declare @BarcodeMain_ID nvarchar(30)  ${BarcodeMain_ID} --951
DECLARE @Style nvarchar(30)  ${Style} --'61173101'
DECLARE @SKU nvarchar(30)  ${SKU} --'61173101-2730'
DECLARE @Barcode nvarchar(30)  ${Barcode} -- '61173101J-2730-XXXL'
DECLARE @Color nvarchar(10)  ${Color} -- '2730'
DECLARE @ColorFamily nvarchar(100)  ${ColorFamily} -- 'سبز و شكاري نظامي'
DECLARE @ColorEnTitle nvarchar(40)  ${ColorEnTitle} -- DK.ROYAL
DECLARE @Size nvarchar(10)  ${Size} -- XXXL
DECLARE @CategoriesTitle nvarchar(20)  ${CategoriesTitle} -- Core
DECLARE @ProductName nvarchar(20)  ${ProductName} -- Tee
DECLARE @ProductStyletitle nvarchar(20)  ${ProductStyletitle} --ساده و تك رنگ
DECLARE @ProductStyleTitleEN nvarchar(20)  ${ProductStyleTitleEN} -- Solid
DECLARE @MaterialTitle nvarchar(20)  ${MaterialTitle}
DECLARE @SexTitle nvarchar(20)  ${SexTitle} -- Men
DECLARE @SeasonCode nvarchar(20)  ${SeasonCode} -- SS
DECLARE @SeasonCode2 nvarchar(20)  ${SeasonCode2} -- SS
DECLARE @ProductAge nvarchar(20)  ${ProductAge} -- Adult
DECLARE @ProductCutting nvarchar(20)  ${ProductCutting} 
DECLARE @OrgPrice nvarchar(20)  ${OrgPrice} -- '690000.000'
DECLARE @SalePrice nvarchar(30)  ${SalePrice} -- '690000.000'
DECLARE @Brand nvarchar(20)  ${Brand} -- 'Jooti'
DECLARE @ProductGroup nvarchar(20)  ${ProductGroup} -- 'پوشاك'
DECLARE @ProductCategory nvarchar(20)  ${ProductCategory} -- 'تي شرت'

;With MyCte AS 
(
SELECT
TotalCount = COUNT(*) OVER()
,RowNumber = ROW_NUMBER() OVER(ORDER BY (Cast(B.TSCode AS bigint)))
,B.BarcodeMain_ID
,P.K_Bar_Code AS Style
,CONCAT(P.K_Bar_Code,'-',B.Color) AS SKU
,B.KBarCode AS Barcode
,B.Color
,BI.ColorFamily
,BI.ColorEnTitle
,B.Size
,PC.CategoriesTitle
,P.K_Name AS ProductName
,P.ItemNameEn AS ProductNameEN
,PS.StyleTitleEN AS ProductStyletitle
,PS.StyleTitle AS ProductStyleTitleEN
,PM.MaterialTitle 
,Case When REPLACE(P.SexTitle,'*','') IN ('Girls','Women') THEN 'Women' ELSE 
Case When REPLACE(P.SexTitle,'*','') IN ('Boys','Men') THEN 'MEN' ELSE 
'Unisex' END END AS SexTitle
,B.SeasonCode
,Replace(P.SeasonCode2,'*','') AS SeasonCode2
,P.ProductAge
,P.ProductCutting
,PA.EndUserPrice AS OrgPrice
,PA.SalePrice
,CB.BrandGroupName AS Brand
,CD.GroupDepartmentName AS ProductGroup
,CD.Title2 AS ProductCategory
,Cast(B.TSCode AS bigint) TSCodeID
,Bs.SearchCode
from Product.ProductMain AS P with(nolock)
INNER JOIN Product.BarcodeMain AS B with(nolock) ON B.ProductMain_ID=P.ProductMain_ID
LEFT JOIN Product.BarcodeMainInfo AS BI with(nolock) ON BI.BarcodeMain_ID=B.BarcodeMain_ID
INNER JOIN Product.CodingBrand AS CB with(nolock) ON CB.CodingBrand_ID=P.CodingBrand_ID
INNER JOIN Product.CodingDepartment AS CD with(nolock) ON CD.CodingDepartment_ID=P.CodingDepartment_ID
INNER JOIN Product.AccountingInfo AS PA with(nolock) ON PA.ProductMain_ID=P.ProductMain_ID
LEFT JOIN Product.Categories AS PC with(nolock) ON PC.Categories_ID=P.Categories_ID
LEFT JOIN Product.Styles AS PS with(nolock) ON PS.Styles_ID=P.Styles_ID
LEFT JOIN Product.Material AS PM with(nolock) ON PM.Material_ID=P.Material_ID
left JOIN 
        (select BarcodeMain_ID,STRING_AGG(cast(SearchCode AS varchar(max)),',') AS SearchCode 
        from  Product.BarcodeExteraSearchInfo  with(nolock)
        Group by BarcodeMain_ID) AS Bs 
ON Bs.BarcodeMain_ID=B.BarcodeMain_ID
where B.IsDeleted=0 and P.IsDeleted=0 and CB.CodingParentBrand_ID=9620  

)

Select TOP (@PerPage) * FROM MyCte

WHERE (RowNumber > (( @Page - 1) * ( @PerPage )))

and (@BarcodeMain_ID IS NULL OR BarcodeMain_ID= @BarcodeMain_ID)
and (@Style IS NULL OR Style = @Style)
and (@SKU IS NULL OR SKU= @SKU)
and (@Barcode IS NULL OR Barcode= @Barcode)
and (@Color IS NULL OR Color= @Color)
and (@ColorFamily IS NULL OR ColorFamily = @ColorFamily) 
and (@ColorEnTitle IS NULL OR ColorEnTitle = @ColorEnTitle) 
and (@Size IS NULL OR Size = @Size)
and (@CategoriesTitle IS NULL OR CategoriesTitle = @CategoriesTitle)
and (@ProductStyletitle IS NULL OR ProductStyletitle = @ProductStyletitle)
and (@ProductStyleTitleEN IS NULL OR ProductStyleTitleEN = @ProductStyleTitleEN)
and (@MaterialTitle IS NULL OR MaterialTitle = @MaterialTitle)
and (@SexTitle IS NULL OR SexTitle = @SexTitle)
and (@SeasonCode IS NULL OR SeasonCode = @SeasonCode)
and (@SeasonCode2 IS NULL OR SeasonCode2 = @SeasonCode2)
and (@ProductAge IS NULL OR ProductAge = @ProductAge)
and (@ProductCutting IS NULL OR ProductCutting = @ProductCutting)
and (@OrgPrice IS NULL OR OrgPrice = @OrgPrice)
and (@SalePrice IS NULL OR SalePrice = @SalePrice)
and (@Brand IS NULL OR Brand = @Brand)
and (@ProductGroup IS NULL OR ProductGroup = @ProductGroup)
and (@ProductCategory IS NULL OR ProductCategory = @ProductCategory)
and (@TSCodeID IS NULL OR TSCodeID > @TSCodeID )

ORDER BY (TSCodeID)

`;

export const getProductsWithtsCodeIdQuery = (
  TopNum: number,
  TsCodeId: string,
) => `
Declare @TSCodeID bigint = '${TsCodeId}'
Declare @TopNum int = ${TopNum}

SELECT TOP (@TopNum)

B.BarcodeMain_ID
,P.K_Bar_Code AS Style
,CONCAT(P.K_Bar_Code,'-',B.Color) AS SKU
,B.KBarCode AS Barcode
,B.Color
,BI.ColorFamily
,BI.ColorEnTitle
,B.Size
,PC.CategoriesTitle
,P.K_Name AS ProductName
,P.ItemNameEn AS ProductNameEN
,PS.StyleTitleEN AS ProductStyletitle
,PS.StyleTitle AS ProductStyleTitleEN
,PM.MaterialTitle 
,P.SexTitle
,B.SeasonCode
,P.SeasonCode2
,P.ProductAge
,P.ProductCutting
,PA.EndUserPrice AS OrgPrice
,PA.SalePrice
,CB.Title AS Brand
,CB0.Title AS ProductGroup
,CD.Title2 AS ProductCategory
,Cast(B.TSCode AS bigint) TSCodeID
,Bs.SearchCode
from Product.ProductMain AS P
INNER JOIN Product.BarcodeMain AS B ON B.ProductMain_ID=P.ProductMain_ID
LEFT JOIN Product.BarcodeMainInfo AS BI ON BI.BarcodeMain_ID=B.BarcodeMain_ID
INNER JOIN Product.CodingBrand AS CB ON CB.CodingBrand_ID=P.CodingBrand_ID
INNER JOIN Product.CodingBrand AS CB0 ON CB0.CodingBrand_ID=CB.CodingParentBrand_ID
INNER JOIN Product.CodingDepartment AS CD ON CD.CodingDepartment_ID=P.CodingDepartment_ID
INNER JOIN Product.AccountingInfo AS PA ON PA.ProductMain_ID=P.ProductMain_ID
LEFT JOIN Product.Categories AS PC ON PC.Categories_ID=P.Categories_ID
LEFT JOIN Product.Styles AS PS ON PS.Styles_ID=P.Styles_ID
LEFT JOIN Product.Material AS PM ON PM.Material_ID=P.Material_ID
left JOIN 
        (select BarcodeMain_ID,STRING_AGG(cast(SearchCode AS varchar(max)),',') AS SearchCode 
        from  Product.BarcodeExteraSearchInfo 
        Group by BarcodeMain_ID) AS Bs 
ON Bs.BarcodeMain_ID=B.BarcodeMain_ID
where B.IsDeleted=0 and P.IsDeleted=0 and CB.CodingParentBrand_ID=9620 
and Cast(B.TSCode AS bigint)>@TSCodeID 
`;

export const productQuery = (TopNum: number, RowNumber: number) => `
Declare @TopNum int = ${TopNum}
Declare @RowNumber int = ${RowNumber}

;With MyCte AS 
(
SELECT TOP (@TopNum + @RowNumber)
TotalCount = COUNT(*) OVER()
,RowNumber = ROW_NUMBER() OVER(ORDER BY Cast(B.TSCode AS bigint))
,B.BarcodeMain_ID
,P.K_Bar_Code AS Style
,CONCAT(P.K_Bar_Code,'-',B.Color) AS SKU
,B.KBarCode AS Barcode
,B.Color
,BI.ColorFamily
,BI.ColorEnTitle
,B.Size
,PC.CategoriesTitle
,P.K_Name AS ProductName
,P.ItemNameEn AS ProductNameEN
,PS.StyleTitleEN AS ProductStyletitle
,PS.StyleTitle AS ProductStyleTitleEN
,PM.MaterialTitle 
,P.SexTitle
,B.SeasonCode
,P.SeasonCode2
,P.ProductAge
,P.ProductCutting
,PA.EndUserPrice AS OrgPrice
,PA.SalePrice
,CB.Title AS Brand
,CB0.Title AS ProductGroup
,CD.Title2 AS ProductCategory
,Cast(B.TSCode AS bigint) TSCodeID
,Bs.SearchCode
from Product.ProductMain AS P
INNER JOIN Product.BarcodeMain AS B ON B.ProductMain_ID=P.ProductMain_ID
LEFT JOIN Product.BarcodeMainInfo AS BI ON BI.BarcodeMain_ID=B.BarcodeMain_ID
INNER JOIN Product.CodingBrand AS CB ON CB.CodingBrand_ID=P.CodingBrand_ID
INNER JOIN Product.CodingBrand AS CB0 ON CB0.CodingBrand_ID=CB.CodingParentBrand_ID
INNER JOIN Product.CodingDepartment AS CD ON CD.CodingDepartment_ID=P.CodingDepartment_ID
INNER JOIN Product.AccountingInfo AS PA ON PA.ProductMain_ID=P.ProductMain_ID
LEFT JOIN Product.Categories AS PC ON PC.Categories_ID=P.Categories_ID
LEFT JOIN Product.Styles AS PS ON PS.Styles_ID=P.Styles_ID
LEFT JOIN Product.Material AS PM ON PM.Material_ID=P.Material_ID
left JOIN 
        (select BarcodeMain_ID,STRING_AGG(cast(SearchCode AS varchar(max)),',') AS SearchCode 
        from  Product.BarcodeExteraSearchInfo 
        Group by BarcodeMain_ID) AS Bs 
ON Bs.BarcodeMain_ID=B.BarcodeMain_ID
where B.IsDeleted=0 and P.IsDeleted=0 and CB.CodingParentBrand_ID=9620
)

Select * FROM MyCte
WHERE RowNumber > @RowNumber
    `;

export const getProductsWithPaginationQuery = (
  Page: number,
  PerPage: number,
) => `
Declare @Page int = ${Page}
Declare @PerPage int = ${PerPage}

;With MyCte AS 
(
SELECT
TotalCount = COUNT(*) OVER()
,RowNumber = ROW_NUMBER() OVER(ORDER BY Cast(B.TSCode AS bigint))
,B.BarcodeMain_ID
,P.K_Bar_Code AS Style
,CONCAT(P.K_Bar_Code,'-',B.Color) AS SKU
,B.KBarCode AS Barcode
,B.Color
,BI.ColorFamily
,BI.ColorEnTitle
,B.Size
,PC.CategoriesTitle
,P.K_Name AS ProductName
,P.ItemNameEn AS ProductNameEN
,PS.StyleTitleEN AS ProductStyletitle
,PS.StyleTitle AS ProductStyleTitleEN
,PM.MaterialTitle 
,P.SexTitle
,B.SeasonCode
,P.SeasonCode2
,P.ProductAge
,P.ProductCutting
,PA.EndUserPrice AS OrgPrice
,PA.SalePrice
,CB.Title AS Brand
,CB0.Title AS ProductGroup
,CD.Title2 AS ProductCategory
,Cast(B.TSCode AS bigint) TSCodeID
,Bs.SearchCode
from Product.ProductMain AS P
INNER JOIN Product.BarcodeMain AS B ON B.ProductMain_ID=P.ProductMain_ID
LEFT JOIN Product.BarcodeMainInfo AS BI ON BI.BarcodeMain_ID=B.BarcodeMain_ID
INNER JOIN Product.CodingBrand AS CB ON CB.CodingBrand_ID=P.CodingBrand_ID
INNER JOIN Product.CodingBrand AS CB0 ON CB0.CodingBrand_ID=CB.CodingParentBrand_ID
INNER JOIN Product.CodingDepartment AS CD ON CD.CodingDepartment_ID=P.CodingDepartment_ID
INNER JOIN Product.AccountingInfo AS PA ON PA.ProductMain_ID=P.ProductMain_ID
LEFT JOIN Product.Categories AS PC ON PC.Categories_ID=P.Categories_ID
LEFT JOIN Product.Styles AS PS ON PS.Styles_ID=P.Styles_ID
LEFT JOIN Product.Material AS PM ON PM.Material_ID=P.Material_ID
left JOIN 
        (select BarcodeMain_ID,STRING_AGG(cast(SearchCode AS varchar(max)),',') AS SearchCode 
        from  Product.BarcodeExteraSearchInfo 
        Group by BarcodeMain_ID) AS Bs 
ON Bs.BarcodeMain_ID=B.BarcodeMain_ID
where B.IsDeleted=0 and P.IsDeleted=0 and CB.CodingParentBrand_ID=9620
)
Select TOP (@PerPage) * FROM MyCte
WHERE (RowNumber > (( @Page - 1) * ( @PerPage )))
ORDER BY TSCodeID
`;

export const getProductByBarcodeQuery = (Barcode: string) => `
Declare @Barcode varchar(30) = '${Barcode}'

SELECT
B.BarcodeMain_ID
,P.K_Bar_Code AS Style
,CONCAT(P.K_Bar_Code,'-',B.Color) AS SKU
,B.KBarCode AS Barcode
,B.Color
,BI.ColorFamily
,BI.ColorEnTitle
,B.Size
,PC.CategoriesTitle
,P.K_Name AS ProductName
,P.ItemNameEn AS ProductNameEN
,PS.StyleTitleEN AS ProductStyletitle
,PS.StyleTitle AS ProductStyleTitleEN
,PM.MaterialTitle 
,P.SexTitle
,B.SeasonCode
,P.SeasonCode2
,P.ProductAge
,P.ProductCutting
,PA.EndUserPrice AS OrgPrice
,PA.SalePrice
,CB.Title AS Brand
,CB0.Title AS ProductGroup
,CD.Title2 AS ProductCategory
,Cast(B.TSCode AS bigint) TSCodeID
,Bs.SearchCode
from Product.ProductMain AS P
INNER JOIN Product.BarcodeMain AS B ON B.ProductMain_ID=P.ProductMain_ID
LEFT JOIN Product.BarcodeMainInfo AS BI ON BI.BarcodeMain_ID=B.BarcodeMain_ID
INNER JOIN Product.CodingBrand AS CB ON CB.CodingBrand_ID=P.CodingBrand_ID
INNER JOIN Product.CodingBrand AS CB0 ON CB0.CodingBrand_ID=CB.CodingParentBrand_ID
INNER JOIN Product.CodingDepartment AS CD ON CD.CodingDepartment_ID=P.CodingDepartment_ID
INNER JOIN Product.AccountingInfo AS PA ON PA.ProductMain_ID=P.ProductMain_ID
LEFT JOIN Product.Categories AS PC ON PC.Categories_ID=P.Categories_ID
LEFT JOIN Product.Styles AS PS ON PS.Styles_ID=P.Styles_ID
LEFT JOIN Product.Material AS PM ON PM.Material_ID=P.Material_ID
left JOIN 
        (select BarcodeMain_ID,STRING_AGG(cast(SearchCode AS varchar(max)),',') AS SearchCode 
        from  Product.BarcodeExteraSearchInfo 
        Group by BarcodeMain_ID) AS Bs 
ON Bs.BarcodeMain_ID=B.BarcodeMain_ID
where B.IsDeleted=0 and P.IsDeleted=0 and CB.CodingParentBrand_ID=9620
and B.KBarCode = @Barcode

`;
