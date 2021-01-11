import { ClientsModule, Transport } from '@nestjs/microservices';
import { Test, TestingModule } from '@nestjs/testing';
import { ERP_BranchController } from './branch.controller';
import { ERP_BranchService } from '../service/branch.service';
import { ERP_BranchSrevice } from '../interface/branch-service.interface';
import { ERP_BRANCH_SERVICE } from 'src/section/erp/common/constant/service.const';

class MockERPBranchService {}

describe('ERP_BranchController', () => {
  let erpController; //: ERP_BranchController;
  let erpService; //: ERP_BranchSrevice;

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [ERP_BranchController],
      providers: [
        {
          provide: ERP_BRANCH_SERVICE,
          useClass: MockERPBranchService,
        },
      ],
    }).compile();
    erpController = moduleRef.get<ERP_BranchController>(ERP_BranchController);
    erpService = moduleRef.get<ERP_BranchService>(ERP_BranchService);
  });
  it('should be defined', () => {
    console.log('we got here!');
    expect(erpController).toBeDefined();
  });

  // describe('getBranches', () => {
  //   it('should return an array of branches', async () => {
  //     const sampleResult: GetBranchesResponseDto[] = [
  //       {
  //         DepartmentInfo_ID: 'string',
  //         DepName: 'string',
  //         LocationPoint: ['longtitude', 'latitude '],
  //         DepTel: 'string',
  //         DepAddress: 'string',
  //         long: 'string',
  //         lat: 'string',
  //       },
  //     ];
  //     jest
  //       .spyOn(erpService, 'getBranches')
  //       .mockImplementation(async () => sampleResult);
  //     expect(await erpController.getBranches()).toBe(sampleResult);
  //   });
  // });
});
