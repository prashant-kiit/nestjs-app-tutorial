import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/users (GET) should return array of objects with id:number and name:string', async () => {
    const res = await request(app.getHttpServer()).get('/users').expect(200);

    // Type-safe checks
    expect(Array.isArray(res.body)).toBe(true);

    for (const item of res.body as { id: number; name: string }[]) {
      expect(typeof item.id).toBe('number');
      expect(typeof item.name).toBe('string');
    }
  });

  it('/posts (GET) should return array of objects with id:number and name:string', async () => {
    const res = await request(app.getHttpServer()).get('/posts').expect(200);

    // Type-safe checks
    expect(Array.isArray(res.body)).toBe(true);

    for (const item of res.body as { id: number; name: string }[]) {
      expect(typeof item.id).toBe('number');
      expect(typeof item.name).toBe('string');
    }
  });
});
