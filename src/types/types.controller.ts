import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { TypesService } from './types.service';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '@prisma/client';
import { Public } from '../auth/decorators/public.decorator';
import { GetThrottle, WriteThrottle } from '../auth/decorators/throttle.decorator';

@ApiTags('Types')
@Controller('types')
export class TypesController {
  constructor(private readonly typesService: TypesService) {}

  @WriteThrottle()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.USER)
  @ApiBearerAuth()
  @Post('add')
  @ApiOperation({ summary: 'Créer un nouveau type' })
  @ApiResponse({ status: 201, description: 'Type créé avec succès.' })
  create(@Body() dto: CreateTypeDto) {
    return this.typesService.create(dto);
  }

  @WriteThrottle()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.USER)
  @ApiBearerAuth()
  @Put(':id')
  @ApiOperation({ summary: 'Mettre à jour un type' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Type mis à jour avec succès.' })
  @ApiResponse({ status: 404, description: 'Type non trouvé.' })
  update(@Param('id') id: number, @Body() dto: UpdateTypeDto) {
    return this.typesService.update(Number(id), dto);
  }

  @WriteThrottle()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.USER)
  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer un type' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Type supprimé avec succès.' })
  @ApiResponse({ status: 404, description: 'Type non trouvé.' })
  delete(@Param('id') id: number) {
    return this.typesService.delete(Number(id));
  }

  @GetThrottle()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.USER)
  @ApiBearerAuth()
  @Get(':id')
  @ApiOperation({ summary: 'Récupérer un type par ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Type récupéré avec succès.' })
  @ApiResponse({ status: 404, description: 'Type non trouvé.' })
  getById(@Param('id') id: number) {
    return this.typesService.getById(Number(id));
  }

  @GetThrottle()
  @Public()
  @Get(':id/statistics')
  @ApiOperation({ summary: 'Récupérer les statistiques associées à un type' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({
    status: 200,
    description: 'Statistiques récupérées avec succès.',
  })
  getStatisticsById(@Param('id') id: number) {
    return this.typesService.getStatisticsById(Number(id));
  }

  @GetThrottle()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.USER)
  @ApiBearerAuth()
  @Get('all')
  @ApiOperation({ summary: 'Récupérer tous les types' })
  @ApiResponse({
    status: 200,
    description: 'Liste des types récupérée avec succès.',
  })
  getAll() {
    return this.typesService.getAll();
  }
}
