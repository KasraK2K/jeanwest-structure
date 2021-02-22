import { IBanimodeDetails } from "./banimode-details.interface";
import { IErpDetails } from "./erp-details.interface";

export interface IProduct {
  quantity: number;
  barcode: string;
  mainCode: number;
  sku: string;
  styleCode: string;
  tsCode: number;
  basePrice: number;
  salePrice: number;
  erpDetails: IErpDetails;
  searchList: string[];
  banimodeCode: number;
  banimodeDetails: IBanimodeDetails;
}