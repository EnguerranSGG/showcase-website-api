import { Controller, Post, Body, Put } from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import { Req } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { Public } from './decorators/public.decorator';
import { Roles } from './decorators/roles.decorator';
import { RolesGuard } from './guards/roles.guard';
import { Role } from '@prisma/client';
import { AuthService } from './auth.service';
import { LoggerService } from 'src/common/logger/logger.service';
import { RegisterDto } from './dto/register.dto';
import { UpdateUserRefreshTokenDto } from './dto/refresh.dto';
import { LoginDto } from './dto/login.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly logger: LoggerService,
  ) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Post('addUser')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Créer un nouvel utilisateur' })
  @ApiResponse({ status: 201, description: 'Utilisateur créé avec succès.' })
  @ApiResponse({ status: 400, description: 'Requête invalide.' })
  signup(@Body() dto: RegisterDto) {
    return this.authService.addUser(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Put('refresh')
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Met à jour le refresh token de l’utilisateur connecté',
  })
  refresh(@Req() req, @Body() dto: UpdateUserRefreshTokenDto) {
    const userId = req.user.sub;
    return this.authService.refreshToken(userId, dto.refreshToken);
  }

  @Public()
  @Post('login')
  @ApiOperation({ summary: 'Se connecter' })
  @ApiResponse({
    status: 200,
    description: 'Connexion réussie. Retourne un JWT.',
  })
  @ApiResponse({ status: 401, description: 'Identifiants invalides.' })
  login(@Body() dto: LoginDto) {
    this.logger.log('Requête POST /auth/login reçue', 'AuthController');
    return this.authService.login(dto);
  }
}
