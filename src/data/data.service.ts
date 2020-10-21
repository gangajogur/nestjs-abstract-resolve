import { Injectable } from '@nestjs/common';
import { AbstractService } from './abstract.service';

@Injectable()
export class DataService extends AbstractService {
  public getHttp() {
    // assume an http call
    return 'hello';
  }
}
