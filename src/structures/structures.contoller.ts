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
  import { StructuresService } from './structures.service';
  import { CreateStructureDto } from './dto/create-structure.dto';
  import { UpdateStructureDto } from './dto/update-structure.dto';
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
  
  @ApiTags('Structures')
  @Controller('structures')
  export class StructuresController {
    constructor(private readonly structuresService: StructuresService) {}
  
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN, Role.USER)
    @ApiBearerAuth()
    @Post()
    @ApiOperation({ summary: 'Créer une structure' })
    @ApiResponse({ status: 201, description: 'Structure créée avec succès.' })
    create(
      @Body() dto: CreateStructureDto,
      @Req() req: any,
    ) {
      return this.structuresService.create(dto, req.user.user_id);
    }
  
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN, Role.USER)
    @ApiBearerAuth()
    @Put(':id')
    @ApiOperation({ summary: 'Mettre à jour une structure' })
    @ApiParam({ name: 'id', type: Number })
    @ApiResponse({ status: 200, description: 'Structure mise à jour avec succès.' })
    @ApiResponse({ status: 404, description: 'Structure non trouvée.' })
    update(
      @Param('id') id: number,
      @Body() dto: UpdateStructureDto,
      @Req() req: any,
    ) {
      return this.structuresService.update(Number(id), dto, req.user.user_id);
    }
  
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN, Role.USER)
    @ApiBearerAuth()
    @Delete(':id')
    @ApiOperation({ summary: 'Supprimer une structure' })
    @ApiParam({ name: 'id', type: Number })
    @ApiResponse({ status: 200, description: 'Structure supprimée avec succès.' })
    @ApiResponse({ status: 404, description: 'Structure non trouvée.' })
    delete(@Param('id') id: number) {
      return this.structuresService.delete(Number(id));
    }
  
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN, Role.USER)
    @ApiBearerAuth()
    @Get(':id')
    @ApiOperation({ summary: 'Récupérer une structure par ID' })
    @ApiParam({ name: 'id', type: Number })
    @ApiResponse({ status: 200, description: 'Structure récupérée avec succès.' })
    @ApiResponse({ status: 404, description: 'Structure non trouvée.' })
    getById(@Param('id') id: number) {
      return this.structuresService.getById(Number(id));
    }
  
    @UseGuards(PublicGuard)
    @Public()
    @Get()
    @ApiOperation({ summary: 'Récupérer toutes les structures' })
    @ApiResponse({ status: 200, description: 'Liste des évenements récupérée avec succès.' })
    getAll() {
      return this.structuresService.getAll();
    }
  }
  