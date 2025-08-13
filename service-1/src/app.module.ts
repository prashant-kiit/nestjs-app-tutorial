import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { LoggerMiddleware } from './logger/logger.middleware';
import { ErrorHandlerMiddleware } from './error-handler/error-handler.middleware';

@Module({
  imports: [UsersModule, PostsModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
    consumer.apply(ErrorHandlerMiddleware).forRoutes('*');
  }
}
