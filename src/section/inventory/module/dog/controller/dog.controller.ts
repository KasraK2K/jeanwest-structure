import { Body, Controller, Inject, Post } from '@nestjs/common';
import { DOG_SERVICE } from 'src/section/inventory/common/constant/service.const';
import { DogDto } from '../dto/dog.dto';
import { IDogSrevice } from '../interface/dog-service.interface';
@Controller('dog')
export class DogController {
  constructor(
    @Inject(DOG_SERVICE)
    private readonly dogService: IDogSrevice,
  ) {}

  @Post()
  public async create(@Body() data: DogDto): Promise<DogDto> {
    return await this.dogService.createDog(data);
  }
}
