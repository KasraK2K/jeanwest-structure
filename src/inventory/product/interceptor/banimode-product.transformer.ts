import { BanimodeProductDto } from '../dto/banimode/banimode.dto';
import { IBanimodeDetails } from '../interface/banimode-details.interface';

export const banimodeProductTransformer = (context) => {
  const finalData = [];
  context.map((itm: Record<string, any>) => {
    const banimodeDatails: IBanimodeDetails = {
      id_product_attribute: itm['product_name'],
      product_name: itm['product_name'],
      id_color: itm['id_color'],
      product_manufacturer_name: itm['product_manufacturer_name'],
      product_manufacturer_en_name: itm['product_manufacturer_en_name'],
      product_manufacturer_slug: itm['product_manufacturer_slug'],
      color_name: itm['color_name'],
      color_slug: itm['color_slug'],
      color_value: itm['color_value'],
      images: itm['images'],
      size: itm['size'],
      product_size_guide: itm['product_size_guide'],
      product_features: itm['product_features'],
      size_chart_support: itm['size_chart_support'],
    };
    const transformed: BanimodeProductDto = {
      banimodeCode: itm['product_id'],
      banimodeDetails: banimodeDatails,
    };
    finalData.push(transformed);
  });
  return finalData;
};
