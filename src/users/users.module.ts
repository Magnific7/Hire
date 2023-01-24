import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { UsersController } from './controllers/users/users.controller';
import { User } from './entities/user.entity';
import { AnotherMiddlewareMiddleware } from './middlewares/another-middleware/another-middleware.middleware';
import { UsersService } from './services/users/users.service';

@Module({
  controllers: [UsersController],
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      // .apply(ExamplesMiddleware)
      // .forRoutes({
      //   path: 'users/fetch',
      //   method: RequestMethod.GET,
      // })
      .apply(AnotherMiddlewareMiddleware)
      .forRoutes({
        path: 'users/create',
        method: RequestMethod.POST,
      });
  }
}
