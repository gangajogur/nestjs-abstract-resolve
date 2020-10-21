import { Injectable } from '@nestjs/common';
import { AbstractService } from './data/abstract.service';

@Injectable()
export class AppService {
  /**
   *
   */
  constructor(private dataAbstractService: AbstractService) {}

  public getHello(): string {
    return this.dataAbstractService.getHttp();
  }
}
