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
  import { StepsService } from './steps.service';
  import { CreateStepDto } from './dto/create-step.dto';
  import { UpdateStepDto } from './dto/update-step.dto';
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
  
  @ApiTags('Steps')
  @Controller('steps')
  export class StepsController {
    constructor(private readonly stepsService: StepsService) {}
  
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN, Role.USER)
    @ApiBearerAuth()
    @Post('add')
    @ApiOperation({ summary: 'Créer une nouvelle étape' })
    @ApiResponse({ status: 201, description: 'Étape créée avec succès.' })
    create(
      @Body() dto: CreateStepDto,
      @Req() req: any,
    ) {
      return this.stepsService.create(dto, req.user.user_id);
    }
  
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN, Role.USER)
    @ApiBearerAuth()
    @Put(':id')
    @ApiOperation({ summary: 'Mettre à jour une étape' })
    @ApiParam({ name: 'id', type: Number })
    @ApiResponse({ status: 200, description: 'Étape mise à jour avec succès.' })
    @ApiResponse({ status: 404, description: 'Étape non trouvée.' })
    update(
      @Param('id') id: number,
      @Body() dto: UpdateStepDto,
      @Req() req: any,
    ) {
      return this.stepsService.update(Number(id), dto, req.user.user_id);
    }
  
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN, Role.USER)
    @ApiBearerAuth()
    @Delete(':id')
    @ApiOperation({ summary: 'Supprimer une étape' })
    @ApiParam({ name: 'id', type: Number })
    @ApiResponse({ status: 200, description: 'Étape supprimée avec succès.' })
    @ApiResponse({ status: 404, description: 'Étape non trouvée.' })
    delete(@Param('id') id: number) {
      return this.stepsService.delete(Number(id));
    }
  
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN, Role.USER)
    @ApiBearerAuth()
    @Get(':id')
    @ApiOperation({ summary: 'Récupérer une étape par ID' })
    @ApiParam({ name: 'id', type: Number })
    @ApiResponse({ status: 200, description: 'Étape récupérée avec succès.' })
    @ApiResponse({ status: 404, description: 'Étape non trouvée.' })
    getById(@Param('id') id: number) {
      return this.stepsService.getById(Number(id));
    }
  
    @UseGuards(PublicGuard)
    @Public()
    @Get('by-path/:pathId')
    @ApiOperation({ summary: 'Récupérer les étapes par parcours' })
    @ApiParam({ name: 'pathId', type: Number })
    @ApiResponse({ status: 200, description: 'Étapes récupérées avec succès.' })
    getStepsByPositionId(@Param('pathId') pathId: number) {
      return this.stepsService.getStepsByPathId(Number(pathId));
    }
  
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN, Role.USER)
    @ApiBearerAuth()
    @Get('all')
    @ApiOperation({ summary: 'Récupérer toutes les étapes' })
    @ApiResponse({ status: 200, description: 'Liste des étapes récupérée avec succès.' })
    getAll() {
      return this.stepsService.getAll();
    }
  }
  