import { config } from 'dotenv';
config();

import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import { join } from 'path';

const DATABASE_URL: string = process.env.DATABASE_URL;

const dbConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: DATABASE_URL,
  entities: [join(__dirname, '**', '*.entity.{ts,js}')],

  // logging: process.env.NODE_ENV === 'development',
  migrations: [join(__dirname, './migrations/*{.ts,.js}')],
};

export const DatabaseModule: TypeOrmModuleAsyncOptions = {
  useFactory: async (): Promise<TypeOrmModuleOptions> => {
    return dbConfig;
  },
};
