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
  import { JobsService } from './jobs.service';
  import { CreateJobDto } from './dto/create-job.dto';
  import { UpdateJobDto } from './dto/update-job.dto';
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
  
  @ApiTags('Jobs')
  @Controller('jobs')
  export class JobsController {
    constructor(private readonly jobsService: JobsService) {}
  
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN, Role.USER)
    @ApiBearerAuth()
    @Post()
    @ApiOperation({ summary: 'Créer une nouvelle fonction' })
    @ApiResponse({ status: 201, description: 'Fonction créée avec succès.' })
    create(
      @Body() dto: CreateJobDto,
      @Req() req: any,
    ) {
      return this.jobsService.create(dto, req.user.user_id);
    }
  
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN, Role.USER)
    @ApiBearerAuth()
    @Put(':id')
    @ApiOperation({ summary: 'Mettre à jour une fonction' })
    @ApiParam({ name: 'id', type: Number })
    @ApiResponse({ status: 200, description: 'Fonction mise à jour avec succès.' })
    @ApiResponse({ status: 404, description: 'Fonction non trouvée.' })
    update(
      @Param('id') id: number,
      @Body() dto: UpdateJobDto,
      @Req() req: any,
    ) {
      return this.jobsService.update(Number(id), dto, req.user.user_id);
    }
  
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN, Role.USER)
    @ApiBearerAuth()
    @Delete(':id')
    @ApiOperation({ summary: 'Supprimer une fonction' })
    @ApiParam({ name: 'id', type: Number })
    @ApiResponse({ status: 200, description: 'Fonction supprimée avec succès.' })
    @ApiResponse({ status: 404, description: 'Fonction non trouvée.' })
    delete(@Param('id') id: number) {
      return this.jobsService.delete(Number(id));
    }
  
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN, Role.USER)
    @ApiBearerAuth()
    @Get(':id')
    @ApiOperation({ summary: 'Récupérer une fonction par ID' })
    @ApiParam({ name: 'id', type: Number })
    @ApiResponse({ status: 200, description: 'Fonction récupérée avec succès.' })
    @ApiResponse({ status: 404, description: 'Fonction non trouvée.' })
    getById(@Param('id') id: number) {
      return this.jobsService.getById(Number(id));
    }
  
    @UseGuards(PublicGuard)
    @Public()
    @Get('by-position/:positionId')
    @ApiOperation({ summary: 'Récupérer les fonctions par position' })
    @ApiParam({ name: 'positionId', type: Number })
    @ApiResponse({ status: 200, description: 'Fonctions récupérées avec succès.' })
    getJobsByPositionId(@Param('positionId') positionId: number) {
      return this.jobsService.getJobsByPositionId(Number(positionId));
    }
  
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN, Role.USER)
    @ApiBearerAuth()
    @Get()
    @ApiOperation({ summary: 'Récupérer toutes les fonctions' })
    @ApiResponse({ status: 200, description: 'Liste des fonctions récupérée avec succès.' })
    getAll() {
      return this.jobsService.getAll();
    }
  }
  