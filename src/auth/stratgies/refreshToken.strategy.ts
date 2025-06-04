import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { Request } from 'express';

type JwtPayload = {
  sub: string;
  mail: string;
  role: string;
};

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_REFRESH_SECRET as string, // ✅ cast
      passReqToCallback: true,
    });
  }

  validate(req: Request, payload: JwtPayload) {
    const authHeader = req.get('Authorization');
    const refreshToken = authHeader?.replace('Bearer', '').trim();
    return {
      user_id: payload.sub,
      mail: payload.mail,
      role: payload.role,
      refreshToken,
    };
  }
}
