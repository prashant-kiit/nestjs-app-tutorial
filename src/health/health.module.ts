// health.module.ts
import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HealthController } from './health.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    TerminusModule,
    HttpModule, // ✅ required for HttpHealthIndicator
  ],
  controllers: [HealthController],
})
export class HealthModule {}
