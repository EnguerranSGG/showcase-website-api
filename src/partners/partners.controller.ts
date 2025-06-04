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
import { PartnersService } from './partners.service';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';
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

@ApiTags('Partners')
@Controller('partners')
export class PartnersController {
  constructor(private readonly partnersService: PartnersService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.USER)
  @ApiBearerAuth()
  @Post()
  @ApiOperation({ summary: 'Créer un partenaire' })
  @ApiResponse({ status: 201, description: 'Partenaire créé avec succès.' })
  create(@Body() dto: CreatePartnerDto, @Req() req: any) {
    return this.partnersService.create(dto, req.user.user_id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.USER)
  @ApiBearerAuth()
  @Put(':id')
  @ApiOperation({ summary: 'Mettre à jour un partenaire' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({
    status: 200,
    description: 'Partenaire mis à jour avec succès.',
  })
  @ApiResponse({ status: 404, description: 'Partenaire non trouvé.' })
  update(
    @Param('id') id: number,
    @Body() dto: UpdatePartnerDto,
    @Req() req: any,
  ) {
    return this.partnersService.update(Number(id), dto, req.user.user_id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.USER)
  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer un partenaire' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Partenaire supprimé avec succès.' })
  @ApiResponse({ status: 404, description: 'Partenaire non trouvé.' })
  delete(@Param('id') id: number) {
    return this.partnersService.delete(Number(id));
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.USER)
  @ApiBearerAuth()
  @Get(':id')
  @ApiOperation({ summary: 'Récupérer un partenaire par ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Partenaire récupéré avec succès.' })
  @ApiResponse({ status: 404, description: 'Partenaire non trouvé.' })
  getById(@Param('id') id: number) {
    return this.partnersService.getById(Number(id));
  }

  @UseGuards(PublicGuard)
  @Public()
  @Get()
  @ApiOperation({ summary: 'Récupérer tous les partenaires' })
  @ApiResponse({
    status: 200,
    description: 'Liste des partenaires récupérée avec succès.',
  })
  getAll() {
    return this.partnersService.getAll();
  }
}
