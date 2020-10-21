import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class AbstractService {
  public abstract getHttp(): string;
}
