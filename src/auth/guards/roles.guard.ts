// src/common/guards/roles.guard.ts
import {
    Injectable,
    CanActivate,
    ExecutionContext,
    ForbiddenException,
  } from '@nestjs/common';
  import { Reflector } from '@nestjs/core';
  import { ROLES_KEY } from '../decorators/roles.decorator';
  import { Role } from '@prisma/client';
  
  @Injectable()
  export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}
  
    canActivate(context: ExecutionContext): boolean {
      const requiredRoles = this.reflector.getAllAndOverride<Role[]>(
        ROLES_KEY,
        [context.getHandler(), context.getClass()],
      );
  
      if (!requiredRoles || requiredRoles.length === 0) {
        return true;
      }
  
      const request = context.switchToHttp().getRequest();
      const user = request.user;

      // Logs conditionnels seulement en mode debug
      if (process.env.NODE_ENV === 'development' && process.env.DEBUG_AUTH === 'true') {
        console.log('Utilisateur courant:', user);
        console.log('Rôle attendu:', requiredRoles);
      }

      if (!user || !requiredRoles.includes(user.role)) {
        throw new ForbiddenException('Accès refusé');
      }
  
      return true;
    }
  }
  