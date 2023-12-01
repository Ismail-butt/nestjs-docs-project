import { DynamicModule, Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { CONFIG_OPTIONS } from './constants';

export interface ConfigModuleOptions {
  folder: string;
}

@Module({})
export class ConfigModule {
  static register(options: ConfigModuleOptions): DynamicModule {
    return {
      module: ConfigModule,
      providers: [
        {
          provide: CONFIG_OPTIONS, // So, at run-time, we'll need to first bind the options object to the Nest IoC container, and then have Nest inject it into our ConfigService. Remember from the Custom providers chapter that providers can include any value not just services, so we're fine using dependency injection to handle a simple options object.
          useValue: options,
        },
        ConfigService,
      ],
      exports: [ConfigService],
    };
  }
}
