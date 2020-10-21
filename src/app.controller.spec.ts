import { ContextIdFactory } from '@nestjs/core';
import { Test, TestingModule } from '@nestjs/testing';
import { AbstractService } from './data/abstract.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataModule } from './data/data.module';

describe('AppController', () => {
  let appController: AppController;
  let service: AppService;
  let dataService: AbstractService;
  let undefinedService: AbstractService;

  beforeEach(async () => {
    const contextId = ContextIdFactory.create();
    jest
      .spyOn(ContextIdFactory, 'getByRequest')
      .mockImplementation(() => contextId);

    const app: TestingModule = await Test.createTestingModule({
      imports: [DataModule],
      providers: [AppService],
      controllers: [AppController],
    }).compile();

    appController = await app.resolve<AppController>(AppController, contextId);
    service = await app.resolve(AppService, contextId);

    // COMPILE ERROR ON THE BELOW LINE
    // dataService = await app.resolve(AbstractService, contextId);

    // BELOW IS A WORKAROUND I'VE BEEN USING
    dataService = service['dataAbstractService'];

    // app.get returns undefined due to request scoped architecture
    undefinedService = app.get(AbstractService);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      jest.spyOn(dataService, 'getHttp').mockReturnValue('hi');
      expect(appController.getHello()).toBe('hi');
    });
  });
});
