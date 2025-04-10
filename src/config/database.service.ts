import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseConfig } from './database.config';

@Injectable()
export class DatabaseService {
  constructor(private configService: ConfigService<DatabaseConfig>) {}

  getDatabaseUrl(): string {
    return this.configService.get('DATABASE_URL')!;
  }
}
