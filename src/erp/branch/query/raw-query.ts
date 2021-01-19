export const getBranchesQuery = () => `
--Split LocationPoint By ,  (long,lot)
select D.DepartmentInfo_ID,DepName,LocationPoint,DepTel,DepAddress 
from Accounting.DepartmentInfo AS D
where D.IsActive=1 and D.IsDeleted=0 and DepartmentType_ID=1
and D.DepartmentInfo_ID not in (36,85)`;
