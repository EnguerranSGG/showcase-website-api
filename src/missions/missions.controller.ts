import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UseGuards,
  Req,
} from '@nestjs/common';
import { MissionsService } from './missions.service';
import { CreateMissionDto } from './dto/create-mission.dto';
import { UpdateMissionDto } from './dto/update-mission.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '@prisma/client';

@ApiTags('Missions')
@Controller('missions')
export class MissionsController {
  constructor(private readonly missionsService: MissionsService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.USER)
  @ApiBearerAuth()
  @Post(':structureId')
  @ApiOperation({ summary: 'Créer une mission pour une structure' })
  @ApiParam({ name: 'structureId', type: Number })
  @ApiResponse({ status: 201, description: 'Mission créée avec succès.' })
  create(
    @Param('structureId') structureId: number,
    @Body() dto: CreateMissionDto,
    @Req() req: any,
  ) {
    return this.missionsService.create(
      Number(structureId),
      dto,
      req.user.user_id,
    );
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.USER)
  @ApiBearerAuth()
  @Put(':id')
  @ApiOperation({ summary: 'Mettre à jour une mission' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Mission mise à jour avec succès.' })
  @ApiResponse({ status: 404, description: 'Mission non trouvée.' })
  update(
    @Param('id') id: number,
    @Body() dto: UpdateMissionDto,
    @Req() req: any,
  ) {
    return this.missionsService.update(Number(id), dto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.USER)
  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer une mission' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Mission supprimée avec succès.' })
  @ApiResponse({ status: 404, description: 'Mission non trouvée.' })
  delete(@Param('id') id: number) {
    return this.missionsService.delete(Number(id));
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.USER)
  @ApiBearerAuth()
  @Get('structure/:structureId')
  @ApiOperation({ summary: 'Récupérer les missions d’une structure' })
  @ApiParam({ name: 'structureId', type: Number })
  @ApiResponse({
    status: 200,
    description: 'Liste des missions récupérée avec succès.',
  })
  getByStructure(@Param('structureId') structureId: number) {
    return this.missionsService.findAllByStructure(Number(structureId));
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.USER)
  @ApiBearerAuth()
  @Get(':id')
  @ApiOperation({ summary: 'Récupérer une mission par ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Mission récupérée avec succès.' })
  @ApiResponse({ status: 404, description: 'Mission non trouvée.' })
  getById(@Param('id') id: number) {
    return this.missionsService.getById(Number(id));
  }
}
