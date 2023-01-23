import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/services/users/users.service';
import { DatabaseModule } from './database/database.module';
import { UsersController } from './users/controllers/users/users.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    TypeOrmModule.forRootAsync(DatabaseModule),
    UsersModule,
  ],
  controllers: [UsersController],

  providers: [UsersService],
})
export class AppModule {}
