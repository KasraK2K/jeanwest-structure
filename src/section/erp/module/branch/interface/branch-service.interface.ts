export interface ERP_BranchSrevice {
  getBranches(): Promise<Array<Record<string, unknown>>>;
}
