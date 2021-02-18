import { ErpProductDto } from '../dto/erp/erp.dto';
import { IErpDetails } from '../interface/erp-details.interface';

export const erpProductTransformer = (context) => {
  const finalData = [];
  context.map((itm: Record<string, any>) => {
    const erpDatails: IErpDetails = {
      ageGroup: itm['ProductAge'],
      brand: itm['Brand'],
      category: itm['CategoriesTitle'],
      color: itm['ColorEnTitle'],
      colorCode: itm['Color'],
      colorFamily: itm['ColorFamily'],
      cutting: itm['ProductCutting'],
      gender: itm['SexTitle'],
      group: itm['ProductGroup'],
      subGroup: itm['ProductCategory'],
      material: itm['MaterialTitle'],
      name: itm['ProductNameEN'],
      nameFA: itm['ProductName'],
      seasonCode1: itm['SeasonCode'],
      seasonCode2: itm['SeasonCode2'],
      size: itm['Size'],
      styleFA: itm['ProductStyletitle'],
    };
    const transformed: ErpProductDto = {
      mainCode: itm['BarcodeMain_ID'],
      styleCode: itm['Style'],
      barcode: itm['Barcode'],
      sku: itm['SKU'],
      basePrice: itm['OrgPrice'],
      salePrice: itm['SalePrice'],
      tsCode: itm['TSCodeID'],
      erpDetails: erpDatails,
      searchList: itm['SearchCode'],
    };
    finalData.push(transformed);
  });
  return finalData;
};
