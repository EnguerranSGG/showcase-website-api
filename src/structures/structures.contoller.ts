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
import { Logger } from '@nestjs/common';
import {
  GetThrottle,
  WriteThrottle,
} from '../auth/decorators/throttle.decorator';

@ApiTags('Structures')
@Controller('structures')
export class StructuresController {
  private readonly logger = new Logger(StructuresController.name);

  constructor(private readonly structuresService: StructuresService) {}

  @WriteThrottle()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.USER)
  @ApiBearerAuth()
  @Post('add')
  @ApiOperation({ summary: 'Créer une structure' })
  @ApiResponse({ status: 201, description: 'Structure créée avec succès.' })
  create(@Body() dto: CreateStructureDto, @Req() req: any) {
    this.logger.log('Requête POST reçue pour /api/structures/add');
    this.logger.log('DTO reçu :', dto);
    this.logger.log('User ID reçu :', req.user?.user_id);
    console.log(
      'missions côté serveur :',
      dto.missions,
      'Array ?',
      Array.isArray(dto.missions),
    );
    return this.structuresService.create(dto, req.user.user_id);
  }

  @WriteThrottle()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.USER)
  @ApiBearerAuth()
  @Put(':id')
  @ApiOperation({ summary: 'Mettre à jour une structure' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({
    status: 200,
    description: 'Structure mise à jour avec succès.',
  })
  @ApiResponse({ status: 404, description: 'Structure non trouvée.' })
  update(
    @Param('id') id: number,
    @Body() dto: UpdateStructureDto,
    @Req() req: any,
  ) {
    return this.structuresService.update(Number(id), dto, req.user.user_id);
  }

  @WriteThrottle()
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

  @GetThrottle()
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

  @GetThrottle()
  @UseGuards(PublicGuard)
  @Public()
  @Get('all')
  @ApiOperation({
    summary: 'Récupérer toutes les structures (avec missions, pour admin)',
  })
  @ApiResponse({
    status: 200,
    description:
      'Liste des structures récupérée avec succès (inclut les missions).',
  })
  getAll() {
    return this.structuresService.getAll();
  }

  @GetThrottle()
  @UseGuards(PublicGuard)
  @Public()
  @Get('all/public')
  @ApiOperation({
    summary:
      'Récupérer toutes les structures sans missions (pour site vitrine)',
  })
  @ApiResponse({
    status: 200,
    description:
      'Liste des structures récupérée avec succès (sans missions, inclut le count des missions).',
  })
  getAllForPublic() {
    return this.structuresService.getAllForPublic();
  }

  @GetThrottle()
  @UseGuards(PublicGuard)
  @Public()
  @Get('by-type-name/:typeName')
  @ApiOperation({ summary: 'Récupérer les structures par nom de type' })
  @ApiParam({
    name: 'typeName',
    type: String,
    description: 'Nom du type de structure',
  })
  @ApiResponse({
    status: 200,
    description: 'Liste des structures du type spécifié récupérée avec succès.',
  })
  @ApiResponse({
    status: 404,
    description: 'Aucune structure trouvée pour ce type.',
  })
  getByTypeName(@Param('typeName') typeName: string) {
    return this.structuresService.getByTypeName(typeName);
  }
}
