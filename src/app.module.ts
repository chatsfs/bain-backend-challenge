import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfig } from './config/database';
import { LocationModule } from './modules';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => DatabaseConfig.get,
    }),
    LocationModule,
  ],
})
export class AppModule {}
