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
  import { TimesService } from './times.service';
  import { CreateTimeDto } from './dto/create-time.dto';
  import { UpdateTimeDto } from './dto/update-time.dto';
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
  
  @ApiTags('Times')
  @Controller('times')
  export class TimesController {
    constructor(private readonly timesService: TimesService) {}
  
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN, Role.USER)
    @ApiBearerAuth()
    @Post('add')
    @ApiOperation({ summary: 'Créer un événement' })
    @ApiResponse({ status: 201, description: 'Événement créé avec succès.' })
    create(
      @Body() dto: CreateTimeDto,
      @Req() req: any,
    ) {
      console.log('Payload JWT reçu dans TimesController:', req.user)
      return this.timesService.create(dto, req.user.user_id);
    }
  
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN, Role.USER)
    @ApiBearerAuth()
    @Put(':id')
    @ApiOperation({ summary: 'Mettre à jour un événement' })
    @ApiParam({ name: 'id', type: Number })
    @ApiResponse({ status: 200, description: 'Événement mis à jour avec succès.' })
    @ApiResponse({ status: 404, description: 'Événement non trouvé.' })
    update(
      @Param('id') id: number,
      @Body() dto: UpdateTimeDto,
      @Req() req: any,
    ) {
      return this.timesService.update(Number(id), dto, req.user.user_id);
    }
  
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN, Role.USER)
    @ApiBearerAuth()
    @Delete(':id')
    @ApiOperation({ summary: 'Supprimer un événement' })
    @ApiParam({ name: 'id', type: Number })
    @ApiResponse({ status: 200, description: 'Événement supprimé avec succès.' })
    @ApiResponse({ status: 404, description: 'Événement non trouvé.' })
    delete(@Param('id') id: number) {
      return this.timesService.delete(Number(id));
    }
  
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN, Role.USER)
    @ApiBearerAuth()
    @Get(':id')
    @ApiOperation({ summary: 'Récupérer un événement par ID' })
    @ApiParam({ name: 'id', type: Number })
    @ApiResponse({ status: 200, description: 'Événement récupéré avec succès.' })
    @ApiResponse({ status: 404, description: 'Événement non trouvé.' })
    getById(@Param('id') id: number) {
      return this.timesService.getById(Number(id));
    }
  
    @UseGuards(PublicGuard)
    @Public()
    @Get('all')
    @ApiOperation({ summary: 'Récupérer tous les évenements' })
    @ApiResponse({ status: 200, description: 'Liste des évenements récupérée avec succès.' })
    getAll() {
      return this.timesService.getAll();
    }
  }
  