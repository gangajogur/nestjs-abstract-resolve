import { Injectable, Scope } from '@nestjs/common';
import { AbstractService } from './abstract.service';

@Injectable({ scope: Scope.REQUEST })
export class DataService extends AbstractService {
  public getHttp() {
    // assume an http call
    return 'hello';
  }
}
