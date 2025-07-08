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
  import { CounselorsService } from './counselors.service';
  import { CreateCounselorDto } from './dto/create-counselor.dto';
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
  
  
  @ApiTags('Counselors')
  @Controller('counselors')
  export class CounselorsController {
    constructor(private readonly counselorsService: CounselorsService) {}
  
    @WriteThrottle()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN, Role.USER)
    @ApiBearerAuth()
    @Post('add')
    @ApiOperation({ summary: 'Créer un conseiller' })
    @ApiResponse({
      status: 201,
      description: 'Conseiller créé avec succès.',
    })
    create(@Body() dto: CreateCounselorDto, @Req() req: any) {
      return this.counselorsService.create(dto, req.user.user_id);
    }
  
    @WriteThrottle()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN, Role.USER)
    @ApiBearerAuth()
    @Put(':id')
    @ApiOperation({ summary: 'Mettre à jour un conseiller' })
    @ApiParam({ name: 'id', type: Number })
    @ApiResponse({
      status: 200,
      description: 'Conseiller mis à jour avec succès.',
    })
    @ApiResponse({ status: 404, description: 'Conseiller non trouvé.' })
    update(
      @Param('id') id: number,
      @Body() dto: CreateCounselorDto,
      @Req() req: any,
    ) {
      return this.counselorsService.update(Number(id), dto, req.user.user_id);
    }
  
    @WriteThrottle()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN, Role.USER)
    @ApiBearerAuth()
    @Delete(':id')
    @ApiOperation({ summary: 'Supprimer un conseiller' })
    @ApiParam({ name: 'id', type: Number })
    @ApiResponse({
      status: 200,
      description: 'Conseiller supprimé avec succès.',
    })
    @ApiResponse({ status: 404, description: 'Conseiller non trouvé.' })
    delete(@Param('id') id: number) {
      return this.counselorsService.delete(Number(id));
    }
  
    @GetThrottle()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN, Role.USER)
    @ApiBearerAuth()
    @Get(':id')
    @ApiOperation({ summary: 'Récupérer un conseiller par ID' })
    @ApiParam({ name: 'id', type: Number })
    @ApiResponse({
      status: 200,
      description: 'Conseiller récupéré avec succès.',
    })
    @ApiResponse({ status: 404, description: 'Conseiller non trouvé.' })
    getById(@Param('id') id: number) {
      return this.counselorsService.getById(Number(id));
    }
  
    @GetThrottle()
    @UseGuards(PublicGuard)
    @Public()
    @Get('all')
    @ApiOperation({ summary: 'Récupérer tous les conseillers' })
    @ApiResponse({
      status: 200,
      description: 'Liste des conseillers récupérée avec succès.',
    })
    getAll() {
      return this.counselorsService.getAll();
    }
  }
  