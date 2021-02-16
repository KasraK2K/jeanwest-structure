import { Inject, Injectable } from '@nestjs/common';
import { CATEGORY_TYPEORM_REPO } from '../constant/category.const';
import { ICategorySrevice } from '../interface/category-service.interface';
import { ICategory, ISize, ISubGroup } from '../interface/category.interface';

@Injectable()
export class CategoryService implements ICategorySrevice {
  constructor(
    @Inject(CATEGORY_TYPEORM_REPO)
    private readonly repository,
  ) {}

  public async list(): Promise<ICategory> {
    const result: ICategory = {
      group: await this.group(),
      subGroup: await this.subGroup(),
      size: await this.size(),
      gender: await this.gender(),
      ageGroup: await this.ageGroup(),
      colorFamily: await this.colorFamily(),
    };
    return result;
  }

  private async size(): Promise<ISize> {
    const result = await this.repository.findOne({ name: 'size' });
    return result.details;
  }

  private async gender(): Promise<string[]> {
    const result = await this.repository.findOne({ name: 'gender' });
    return result.details;
  }

  private async ageGroup(): Promise<string[]> {
    const result = await this.repository.findOne({ name: 'ageGroup' });
    return result.details;
  }

  private async colorFamily(): Promise<string[]> {
    const result = await this.repository.findOne({ name: 'colorFamily' });
    return result.details;
  }

  private async group(): Promise<string[]> {
    const result = await this.repository.findOne({ name: 'group' });
    return result.details;
  }

  private async subGroup(): Promise<ISubGroup> {
    const result = await this.repository.findOne({ name: 'subGroup' });
    return result.details;
  }
}
