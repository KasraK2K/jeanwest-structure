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
    const result: ICategory = null;
    result.group = await this.group();
    result.subGroup = await this.subGroup();
    result.size = await this.size();
    result.gender = await this.gender();
    result.ageGroup = await this.ageGroup();
    result.colorFamily = await this.colorFamily();
    return result;
  }

  private async size(): Promise<ISize> {
    const result = await this.repository.findOne({ name: 'size' });
    return result;
  }

  private async gender(): Promise<string[]> {
    const result = await this.repository.findOne({ name: 'gender' });
    return result;
  }

  private async ageGroup(): Promise<string[]> {
    const result = await this.repository.findOne({ name: 'ageGroup' });
    return result;
  }

  private async colorFamily(): Promise<string[]> {
    const result = await this.repository.findOne({ name: 'colorFamily' });
    return result;
  }

  private async group(): Promise<string[]> {
    const result = await this.repository.findOne({ name: 'group' });
    return result;
  }

  private async subGroup(): Promise<ISubGroup> {
    const result = await this.repository.findOne({ name: 'subGroup' });
    return result;
  }
}
