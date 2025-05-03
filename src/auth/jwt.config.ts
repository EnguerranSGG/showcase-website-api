import { Injectable } from '@nestjs/common';
import { JwtModuleOptions, JwtOptionsFactory } from '@nestjs/jwt';

@Injectable()
export class JwtConfig implements JwtOptionsFactory {
  createJwtOptions(): JwtModuleOptions {
    return {
      secret: process.env.JWT_SECRET || 'supersecretjwt',
      signOptions: { expiresIn: '1h' },
    };
  }
}
