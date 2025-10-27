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
  import { PresentationsService } from './presentations.service';
  import { CreatePresentationDto } from './dto/create-presentation.dto';
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
  import { GetThrottle, WriteThrottle } from '../auth/decorators/throttle.decorator';
  
  @ApiTags('Presentations')
  @Controller('presentations')
  export class PresentationsController {
    constructor(private readonly presentationsService: PresentationsService) {}
  
    @WriteThrottle()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN, Role.USER)
    @ApiBearerAuth()
    @Post('add')
    @ApiOperation({ summary: 'Créer une présentation' })
    @ApiResponse({ status: 201, description: 'Présentation créée avec succès.' })
    create(@Body() dto: CreatePresentationDto, @Req() req: any) {
      console.log('Payload JWT reçu dans PresentationsController:', req.user);
      return this.presentationsService.create(dto, req.user.user_id);
    }
  
    @WriteThrottle()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN, Role.USER)
    @ApiBearerAuth()
    @Put(':id')
    @ApiOperation({ summary: 'Mettre à jour une présentation' })
    @ApiParam({ name: 'id', type: Number })
    @ApiResponse({
      status: 200,
      description: 'Présentation mis à jour avec succès.',
    })
    @ApiResponse({ status: 404, description: 'Présentation non trouvée.' })
    update(@Param('id') id: number, @Body() dto: CreatePresentationDto, @Req() req: any) {
      return this.presentationsService.update(Number(id), dto, req.user.user_id);
    }
  
    @GetThrottle()
    @UseGuards(PublicGuard)
    @Public()
    @Get(':id')
    @ApiOperation({ summary: 'Récupérer une présentation par ID' })
    @ApiParam({ name: 'id', type: Number })
    @ApiResponse({ status: 200, description: 'Présentation récupérée avec succès.' })
    @ApiResponse({ status: 404, description: 'Présentation non trouvée.' })
    getById(@Param('id') id: number) {
      return this.presentationsService.getById(Number(id));
    }
  
    @GetThrottle()
    @UseGuards(PublicGuard)
    @Public()
    @Get('all')
    @ApiOperation({ summary: 'Récupérer toutes les présentations' })
    @ApiResponse({
      status: 200,
      description: 'Liste des présentations récupérée avec succès.',
    })
    getAll() {
      return this.presentationsService.getAll();
    }
  }
  