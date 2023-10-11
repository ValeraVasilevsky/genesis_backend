import { Module } from '@nestjs/common';
import { EssenceService } from './essence.service';
import { EssenceController } from './essence.controller';

@Module({
  imports: [],
  controllers: [EssenceController],
  providers: [EssenceService],
})
export class EssenceModule {}
