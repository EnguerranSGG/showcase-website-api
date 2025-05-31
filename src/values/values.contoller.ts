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
  import { ValuesService } from './values.service';
  import { CreateValueDto } from './dto/create-value.dto';
  import { UpdateValueDto } from './dto/update-value.dto';
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
  
  @ApiTags('Values')
  @Controller('values')
  export class ValuesController {
    constructor(private readonly valuesService: ValuesService) {}
  
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN, Role.USER)
    @ApiBearerAuth()
    @Post('add')
    @ApiOperation({ summary: 'Créer une valeur' })
    @ApiResponse({ status: 201, description: 'Valeur créée avec succès.' })
    create(
      @Body() dto: CreateValueDto,
      @Req() req: any,
    ) {
      return this.valuesService.create(dto, req.user.user_id);
    }
  
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN, Role.USER)
    @ApiBearerAuth()
    @Put(':id')
    @ApiOperation({ summary: 'Mettre à jour une valeur' })
    @ApiParam({ name: 'id', type: Number })
    @ApiResponse({ status: 200, description: 'Valeur mise à jour avec succès.' })
    @ApiResponse({ status: 404, description: 'Valeur non trouvée.' })
    update(
      @Param('id') id: number,
      @Body() dto: UpdateValueDto,
      @Req() req: any,
    ) {
      return this.valuesService.update(Number(id), dto, req.user.user_id);
    }
  
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN, Role.USER)
    @ApiBearerAuth()
    @Delete(':id')
    @ApiOperation({ summary: 'Supprimer une valeur' })
    @ApiParam({ name: 'id', type: Number })
    @ApiResponse({ status: 200, description: 'Valeur supprimée avec succès.' })
    @ApiResponse({ status: 404, description: 'Valeur non trouvée.' })
    delete(@Param('id') id: number) {
      return this.valuesService.delete(Number(id));
    }
  
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN, Role.USER)
    @ApiBearerAuth()
    @Get(':id')
    @ApiOperation({ summary: 'Récupérer une valeur par son ID' })
    @ApiParam({ name: 'id', type: Number })
    @ApiResponse({ status: 200, description: 'Valeur récupérée avec succès.' })
    @ApiResponse({ status: 404, description: 'Valeur non trouvée.' })
    getById(@Param('id') id: number) {
      return this.valuesService.getById(Number(id));
    }
  
    @UseGuards(PublicGuard)
    @Public()
    @Get('all')
    @ApiOperation({ summary: 'Récupérer toutes les valeurs' })
    @ApiResponse({ status: 200, description: 'Liste des valeurs récupérée avec succès.' })
    getAll() {
      return this.valuesService.getAll();
    }
  }
  