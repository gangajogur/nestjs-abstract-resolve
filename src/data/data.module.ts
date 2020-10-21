import { Module } from '@nestjs/common';
import { AbstractService } from './abstract.service';
import { DataService } from './data.service';

@Module({
  providers: [{ provide: AbstractService, useClass: DataService }],
  exports: [AbstractService],
})
export class DataModule {}
