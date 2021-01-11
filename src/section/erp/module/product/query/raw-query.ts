export const productQuery = (TopNum, RowNumber) => `
--Declare @TSCodeID bigint = 0
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
,STRING_AGG(BS.SearchCode,',') AS SearchCode

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
LEFT JOIN Product.BarcodeExteraSearchInfo BS ON BS.BarcodeMain_ID=B.BarcodeMain_ID

where B.IsDeleted=0 and
P.IsDeleted=0 and 
CB.CodingParentBrand_ID=9620 
--and Cast(B.TSCode AS bigint)>@TSCodeID
Group by 
B.BarcodeMain_ID
,P.K_Bar_Code 
,B.KBarCode 
,B.Color
,BI.ColorFamily
,BI.ColorEnTitle
,B.Size
,PC.CategoriesTitle
,P.K_Name 
,P.ItemNameEn 
,PS.StyleTitleEN 
,PS.StyleTitle 
,PM.MaterialTitle 
,P.SexTitle
,B.SeasonCode
,P.SeasonCode2
,P.ProductAge
,P.ProductCutting
,PA.EndUserPrice
,PA.SalePrice
,CB.Title 
,CB0.Title 
,CD.Title2 
,Cast(B.TSCode AS bigint) 

ORDER BY TSCodeID
)

Select * FROM MyCte
WHERE RowNumber > @RowNumber
    `;

export const getProductsWithPaginationQuery = (Page, PerPage) => `

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
,STRING_AGG(BS.SearchCode,',') AS SearchCode

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
LEFT JOIN Product.BarcodeExteraSearchInfo BS ON BS.BarcodeMain_ID=B.BarcodeMain_ID

where B.IsDeleted=0 and
P.IsDeleted=0 and 
CB.CodingParentBrand_ID=9620 
--and Cast(B.TSCode AS bigint)>@TSCodeID
Group by 
B.BarcodeMain_ID
,P.K_Bar_Code 
,B.KBarCode 
,B.Color
,BI.ColorFamily
,BI.ColorEnTitle
,B.Size
,PC.CategoriesTitle
,P.K_Name 
,P.ItemNameEn 
,PS.StyleTitleEN 
,PS.StyleTitle 
,PM.MaterialTitle 
,P.SexTitle
,B.SeasonCode
,P.SeasonCode2
,P.ProductAge
,P.ProductCutting
,PA.EndUserPrice
,PA.SalePrice
,CB.Title 
,CB0.Title 
,CD.Title2 
,Cast(B.TSCode AS bigint) 

)

Select TOP (@PerPage) * FROM MyCte
WHERE (RowNumber > (( @Page - 1) * ( @PerPage )))
ORDER BY TSCodeID
`;

//? QUery using limmit and offset, Not ideal, 4 times slower!

/**
 *Declare @OffSet int = 0
Declare @Limit int = 5
select
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
,STRING_AGG(BS.SearchCode,',') AS SearchCode

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
LEFT JOIN Product.BarcodeExteraSearchInfo BS ON BS.BarcodeMain_ID=B.BarcodeMain_ID

where B.IsDeleted=0 and P.IsDeleted=0 and CB.CodingParentBrand_ID=9620 
--and Cast(B.TSCode AS bigint)>@TSCodeID
Group by 
B.BarcodeMain_ID
,P.K_Bar_Code 
,B.KBarCode 
,B.Color
,BI.ColorFamily
,BI.ColorEnTitle
,B.Size
,PC.CategoriesTitle
,P.K_Name 
,P.ItemNameEn 
,PS.StyleTitleEN 
,PS.StyleTitle 
,PM.MaterialTitle 
,P.SexTitle
,B.SeasonCode
,P.SeasonCode2
,P.ProductAge
,P.ProductCutting
,PA.EndUserPrice
,PA.SalePrice
,CB.Title 
,CB0.Title 
,CD.Title2 
,Cast(B.TSCode AS bigint) 

ORDER BY TSCodeID

OFFSET @OffSet ROWS
FETCH NEXT @Limit ROWS ONLY
 */

export const getProductByBarcodeQuery = (Barcode) => `
Declare @Barcode varchar(30) = '${Barcode}'
select
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
,STRING_AGG(BS.SearchCode,',') AS SearchCode
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
LEFT JOIN Product.BarcodeExteraSearchInfo BS ON BS.BarcodeMain_ID=B.BarcodeMain_ID
where B.IsDeleted=0 and P.IsDeleted=0 and CB.CodingParentBrand_ID=9620 
and B.KBarCode = @Barcode
Group by 
B.BarcodeMain_ID
,P.K_Bar_Code 
,B.KBarCode 
,B.Color
,BI.ColorFamily
,BI.ColorEnTitle
,B.Size
,PC.CategoriesTitle
,P.K_Name 
,P.ItemNameEn 
,PS.StyleTitleEN 
,PS.StyleTitle 
,PM.MaterialTitle 
,P.SexTitle
,B.SeasonCode
,P.SeasonCode2
,P.ProductAge
,P.ProductCutting
,PA.EndUserPrice
,PA.SalePrice
,CB.Title 
,CB0.Title 
,CD.Title2 
,Cast(B.TSCode AS bigint)

`;
