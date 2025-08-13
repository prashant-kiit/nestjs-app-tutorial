import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { LoggerMiddleware } from './logger/logger.middleware';
import { ErrorHandlerMiddleware } from './error-handler/error-handler.middleware';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule, UsersModule, PostsModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
    consumer.apply(ErrorHandlerMiddleware).forRoutes('*');
  }
}
