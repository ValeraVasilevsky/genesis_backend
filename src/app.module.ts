import { Module } from '@nestjs/common';

import { EssenceModule } from './essence/essence.module';

@Module({
  imports: [EssenceModule],
})
export class AppModule {}
