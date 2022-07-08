import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Config } from './config';

export class DatabaseConfig {
  static get get(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: Config.dbHost,
      port: Config.dbPort,
      username: Config.dbUsername,
      password: Config.dbPassword,
      database: Config.dbName,
      extra: {
        socketPath: Config.dbSocketPath,
      },
      entities: [__dirname + '/../common/entities/*.entity{.ts,.js}'],
      synchronize: true,
      charset: 'utf8mb4',
      logging: false,
    };
  }
}
