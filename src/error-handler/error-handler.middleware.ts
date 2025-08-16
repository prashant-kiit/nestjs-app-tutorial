import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ErrorHandlerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    try {
      next();
    } catch (error) {
      console.error('Error caught in middleware:', error);
      res.status(500).json({
        status: 'failed',
        message:
          error instanceof Error ? error.message : 'Internal Server Error',
      });
    }
  }
}
