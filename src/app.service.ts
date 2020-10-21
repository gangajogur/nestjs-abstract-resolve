import { Injectable, Scope } from '@nestjs/common';
import { AbstractService } from './data/abstract.service';

@Injectable({ scope: Scope.REQUEST })
export class AppService {
  /**
   *
   */
  constructor(private dataAbstractService: AbstractService) {}

  public getHello(): string {
    return this.dataAbstractService.getHttp();
  }
}
