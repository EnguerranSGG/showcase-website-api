import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { StructureTypesService } from './structure-types.service';
import { CreateStructureTypeDto } from './dto/create-structure-type.dto';
import { UpdateStructureTypeDto } from './dto/update-structure-type.dto';
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
import { PublicGuard } from '../auth/guards/public.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '@prisma/client';
import { GetThrottle, WriteThrottle } from '../auth/decorators/throttle.decorator';

@ApiTags('Structure Types')
@Controller('structure-types')
export class StructureTypesController {
  constructor(private readonly structureTypesService: StructureTypesService) {}

  @WriteThrottle()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.USER)
  @ApiBearerAuth()
  @Post()
  @ApiOperation({ summary: 'Créer un type de structure' })
  @ApiResponse({ status: 201, description: 'Type de structure créé avec succès.' })
  create(@Body() createStructureTypeDto: CreateStructureTypeDto) {
    return this.structureTypesService.create(createStructureTypeDto);
  }

  @GetThrottle()
  @UseGuards(PublicGuard)
  @Public()
  @Get('all')
  @ApiOperation({ summary: 'Récupérer tous les types de structures' })
  @ApiResponse({
    status: 200,
    description: 'Liste des types de structures récupérée avec succès.',
  })
  findAll() {
    return this.structureTypesService.findAll();
  }

  @GetThrottle()
  @UseGuards(PublicGuard)
  @Public()
  @Get(':id')
  @ApiOperation({ summary: 'Récupérer un type de structure par ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Type de structure récupéré avec succès.' })
  @ApiResponse({ status: 404, description: 'Type de structure non trouvé.' })
  findOne(@Param('id') id: string) {
    return this.structureTypesService.findOne(+id);
  }

  @WriteThrottle()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.USER)
  @ApiBearerAuth()
  @Patch(':id')
  @ApiOperation({ summary: 'Mettre à jour un type de structure' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({
    status: 200,
    description: 'Type de structure mis à jour avec succès.',
  })
  @ApiResponse({ status: 404, description: 'Type de structure non trouvé.' })
  update(
    @Param('id') id: string,
    @Body() updateStructureTypeDto: UpdateStructureTypeDto,
  ) {
    return this.structureTypesService.update(+id, updateStructureTypeDto);
  }

  @WriteThrottle()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.USER)
  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer un type de structure' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Type de structure supprimé avec succès.' })
  @ApiResponse({ status: 404, description: 'Type de structure non trouvé.' })
  remove(@Param('id') id: string) {
    return this.structureTypesService.remove(+id);
  }
} 