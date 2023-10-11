import { Controller, Post, Body } from '@nestjs/common';
import { EssenceService } from './essence.service';
import { CreateEssenceDto } from './dto/create-essence.dto';

@Controller('essence')
export class EssenceController {
  constructor(private readonly essenceService: EssenceService) {}

  @Post()
  create(@Body() { title, type }: CreateEssenceDto) {
    return this.essenceService.createEssence({ title, type });
  }
}
