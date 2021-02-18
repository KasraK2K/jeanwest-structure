import { IFilter } from 'src/inventory/product/interface/product-filter.interface';

export const jsonbFilter = async (filter: IFilter): Promise<IFilter>=>{
    const jsonbFilterMap = new Map([
        ['name',"erpDetails->>name"],
        ['nameFA',"erpDetails->>nameFA"],
        ['brand',"erpDetails->>brand"],
        ['group',"erpDetails->>group"],
        ['subGroup',"erpDetails->>subGroup"],
        ['styleFA',"erpDetails->>styleFA"],
        ['color',"erpDetails->>color"],
        ['colorFamily',"erpDetails->>colorFamily"],
        ['colorCode',"erpDetails->>colorCode"],
        ['size',"erpDetails->>size"],
        ['category',"erpDetails->>category"],
        ['material',"erpDetails->>material"],
        ['gender',"erpDetails->>gender"],
        ['seasonCode1',"erpDetails->>seasonCode1"],
        ['seasonCode2',"erpDetails->>seasonCode2"],
        ['ageGroup',"erpDetails->>ageGroup"],
        ['cutting',"erpDetails->>cutting"],
    ]);
    for(const [key,value] of Object.entries(filter)){
        const jsonbKey: string = jsonbFilterMap.get(key);
        if(jsonbKey){
            filter[jsonbKey] = value;
            delete filter[key];
        }
    }
    return filter;
}; 