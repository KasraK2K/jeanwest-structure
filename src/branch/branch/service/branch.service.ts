import { Inject, Injectable } from '@nestjs/common';
import { BRANCH_REPO } from 'src/branch/common/constant/repository.const';
import { ERP_BRANCH_SERVICE } from 'src/branch/common/constant/service.const';
import { Branch } from 'src/branch/common/entity/typeorm/branch.entity.jw';
import { CreateBranchDto, GetBranchesResponseDto } from '../dto/branch.dto';
import { BranchSrevice } from '../interface/branch.interface';

@Injectable()
export class BranchService implements BranchSrevice {
  constructor(
    @Inject(BRANCH_REPO)
    private readonly repository,

    @Inject(ERP_BRANCH_SERVICE)
    private readonly erpBranchService,
  ) {}

  async getBranchesFromERP(): Promise<GetBranchesResponseDto[]> {
    try {
      const erpBranches = await this.erpBranchService.getBranches();
      return erpBranches;
    } catch (err) {
      throw err;
    }
  }

  async setBranches(): Promise<void> {
    try {
      const erpBranches = await this.getBranchesFromERP();
      for (let i = 0; i < erpBranches.length; i++) {
        try {
          const branch = erpBranches[i];
          await this.repository.create(branch);
          await this.repository.save(branch);
        } catch (err) {
          continue;
        }
      }
    } catch (err) {
      throw err;
    }
  }

  async getLocalBranches(): Promise<GetBranchesResponseDto[]> {
    try {
      const erpBranches = this.repository.findMany();
      return erpBranches;
    } catch (err) {
      throw err;
    }
  }

  async getBranchById(id: string | number): Promise<GetBranchesResponseDto> {
    try {
      const erpBranches = this.repository.findById(id);
      return erpBranches;
    } catch (err) {
      throw err;
    }
  }

  async insertBranchesInLocalDB(
    branch: CreateBranchDto,
  ): Promise<GetBranchesResponseDto> {
    try {
      await this.repository.create(branch);
      return this.repository.save(branch);
    } catch (err) {
      throw err;
    }
  }

  async getNearBranches(
    longitude: number,
    latitude: number,
  ): Promise<GetBranchesResponseDto[]> {
    try {
      const branches = await this.getLocalBranches();
      for (let i = 0; i < branches.length; i++) {
        const branch = branches[i];
        const distance = calcCrowDistance(
          latitude,
          longitude,
          branch.lat,
          branch.long,
        );
        branches[i].distance = distance;
      }
      branches.sort((b1, b2) => b1.distance - b2.distance);
      return branches;
    } catch (err) {
      throw err;
    }
  }
}
//This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
function calcCrowDistance(
  latitude2: number,
  longtitude2: number,
  latitude1: number,
  longtitude1: number,
) {
  const R = 6371; // km
  const dLat = toRad(latitude2 - latitude1);
  const dLon = toRad(longtitude2 - longtitude1);
  const lat1 = toRad(latitude1);
  const lat2 = toRad(latitude2);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return d;
}

// Converts numeric degrees to radians
function toRad(Value) {
  return (Value * Math.PI) / 180;
}
