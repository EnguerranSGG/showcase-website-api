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
import { PathsService } from './paths.service';
import { CreatePathDto } from './dto/create-path.dto';
import { UpdatePathDto } from './dto/update-path.dto';
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

@ApiTags('Paths')
@Controller('paths')
export class PathsController {
  constructor(private readonly pathsService: PathsService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.USER)
  @ApiBearerAuth()
  @Post('addNewPath')
  @ApiOperation({ summary: 'Créer un nouveau parcours' })
  @ApiResponse({ status: 201, description: 'Parcours créé avec succès.' })
  create(@Body() dto: CreatePathDto) {
    return this.pathsService.create(dto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.USER)
  @ApiBearerAuth()
  @Put(':id')
  @ApiOperation({ summary: 'Mettre à jour un parcours' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Parcours mis à jour avec succès.' })
  @ApiResponse({ status: 404, description: 'Parcours non trouvé.' })
  update(@Param('id') id: number, @Body() dto: UpdatePathDto) {
    return this.pathsService.update(Number(id), dto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.USER)
  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer un parcours' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Parcours supprimé avec succès.' })
  @ApiResponse({ status: 404, description: 'Parcours non trouvé.' })
  delete(@Param('id') id: number) {
    return this.pathsService.delete(Number(id));
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.USER)
  @ApiBearerAuth()
  @Get(':id')
  @ApiOperation({ summary: 'Récupérer un parcours par son ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Parcours récupéré avec succès.' })
  @ApiResponse({ status: 404, description: 'Parcours non trouvé.' })
  getById(@Param('id') id: number) {
    return this.pathsService.getById(Number(id));
  }

  @Public()
  @Get(':id/steps')
  @ApiOperation({ summary: 'Récupérer les étapes associées à un parcours' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Étapes récupérées avec succès.' })
  getStatisticsById(@Param('id') id: number) {
    return this.pathsService.getStepsPathById(Number(id));
  }

  @Public()
  @Get('by-name/:name')
  @ApiResponse({ status: 200, description: 'Étapes récupérées avec succès.' })
  async getByName(@Param('name') name: string) {
    return this.pathsService.findByName(name);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.USER)
  @ApiBearerAuth()
  @Get()
  @ApiOperation({ summary: 'Récupérer tous les parcours' })
  @ApiResponse({
    status: 200,
    description: 'Liste des parcours récupérée avec succès.',
  })
  getAll() {
    return this.pathsService.getAll();
  }
}
