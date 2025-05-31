import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { PositionsService } from './positions.service';
import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '@prisma/client';
import { Public } from '../auth/decorators/public.decorator';

@ApiTags('Positions')
@Controller('positions')
export class PositionsController {
  constructor(private readonly positionsService: PositionsService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.USER)
  @ApiBearerAuth()
  @Post('add')
  @ApiOperation({ summary: 'Créer une nouvelle position' })
  @ApiResponse({ status: 201, description: 'Position crée avec succès.' })
  create(@Body() dto: CreatePositionDto) {
    return this.positionsService.create(dto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.USER)
  @ApiBearerAuth()
  @Put(':id')
  @ApiOperation({ summary: 'Mettre à jour une position' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Position mise à jour avec succès.' })
  @ApiResponse({ status: 404, description: 'Position non trouvée.' })
  update(@Param('id') id: number, @Body() dto: UpdatePositionDto) {
    return this.positionsService.update(Number(id), dto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.USER)
  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer une position' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Position supprimée avec succès.' })
  @ApiResponse({ status: 404, description: 'Position non trouvée.' })
  delete(@Param('id') id: number) {
    return this.positionsService.delete(Number(id));
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.USER)
  @ApiBearerAuth()
  @Get(':id')
  @ApiOperation({ summary: 'Récupérer un position par ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Position récupérée avec succès.' })
  @ApiResponse({ status: 404, description: 'Position non trouvée.' })
  getById(@Param('id') id: number) {
    return this.positionsService.getById(Number(id));
  }

  @Public()
  @Get(':id/jobs')
  @ApiOperation({ summary: 'Récupérer les fonctions associées à une position' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Fonctions récupérées avec succès.' })
  getStatisticsById(@Param('id') id: number) {
    return this.positionsService.getStatisticsById(Number(id));
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.USER)
  @ApiBearerAuth()
  @Get('all')
  @ApiOperation({ summary: 'Récupérer toutes les positions' })
  @ApiResponse({ status: 200, description: 'Liste des positions récupérée avec succès.' })
  getAll() {
    return this.positionsService.getAll();
  }
}

