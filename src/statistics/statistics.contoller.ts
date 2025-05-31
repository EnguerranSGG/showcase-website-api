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
import { StatisticsService } from './statistics.service';
import { CreateStatisticDto } from './dto/create-statistic.dto';
import { UpdateStatisticDto } from './dto/update-statistic.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Public } from '../auth/decorators/public.decorator';
import { PublicGuard } from 'src/auth/guards/public.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '@prisma/client';

@ApiTags('Statistics')
@Controller('statistics')
export class StatisticsController {
  constructor(private readonly statisticsService: StatisticsService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.USER)
  @ApiBearerAuth()
  @Post('add')
  @ApiOperation({ summary: 'Créer une nouvelle statistique' })
  @ApiResponse({ status: 201, description: 'Statistique créée avec succès.' })
  create(@Body() dto: CreateStatisticDto, @Req() req: any) {
    return this.statisticsService.create(dto, req.user.user_id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.USER)
  @ApiBearerAuth()
  @Put(':id')
  @ApiOperation({ summary: 'Mettre à jour une statistique' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({
    status: 200,
    description: 'Statistique mise à jour avec succès.',
  })
  @ApiResponse({ status: 404, description: 'Statistique non trouvée.' })
  update(
    @Param('id') id: number,
    @Body() dto: UpdateStatisticDto,
    @Req() req: any,
  ) {
    return this.statisticsService.update(Number(id), dto, req.user.user_id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.USER)
  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer une statistique' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({
    status: 200,
    description: 'Statistique supprimée avec succès.',
  })
  @ApiResponse({ status: 404, description: 'Statistique non trouvée.' })
  delete(@Param('id') id: number) {
    return this.statisticsService.delete(Number(id));
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.USER)
  @ApiBearerAuth()
  @Get(':id')
  @ApiOperation({ summary: 'Récupérer une statistique par ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({
    status: 200,
    description: 'Statistique récupérée avec succès.',
  })
  @ApiResponse({ status: 404, description: 'Statistique non trouvée.' })
  getById(@Param('id') id: number) {
    return this.statisticsService.getById(Number(id));
  }

  @UseGuards(PublicGuard)
  @Public()
  @Get('by-type/:typeId')
  @ApiOperation({ summary: 'Récupérer les statistiques par type' })
  @ApiParam({ name: 'typeId', type: Number })
  @ApiResponse({
    status: 200,
    description: 'Statistiques récupérées avec succès.',
  })
  getStatisticsByTypeId(@Param('typeId') typeId: number) {
    return this.statisticsService.getStatisticsByTypeId(Number(typeId));
  }

  @Get('by-type-name/:typeName')
  @UseGuards(PublicGuard)
  @Public()
  @ApiOperation({ summary: 'Statistiques filtrées par type' })
  @ApiResponse({
    status: 200,
    description: 'Statistiques récupérées avec succès.',
  })
  getByType(@Param('typeName') typeName: string) {
    return this.statisticsService.getByTypeName(typeName);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.USER)
  @ApiBearerAuth()
  @Get()
  @ApiOperation({ summary: 'Récupérer toutes les statistiques' })
  @ApiResponse({
    status: 200,
    description: 'Liste des statistiques récupérée avec succès.',
  })
  getAll() {
    return this.statisticsService.getAll();
  }
}
