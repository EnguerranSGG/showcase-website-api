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
import { JobOffersService } from './job-offers.service';
import { CreateJobOfferDto } from './dto/create-job-offer.dto';
import { UpdateJobOfferDto } from './dto/update-job-offer.dto';
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


@ApiTags('JobOffers')
@Controller('jobOffers')
export class JobOffersController {
  constructor(private readonly jobOffersService: JobOffersService) {}

  @WriteThrottle()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.USER)
  @ApiBearerAuth()
  @Post('add')
  @ApiOperation({ summary: 'Créer une offre de poste' })
  @ApiResponse({
    status: 201,
    description: 'Offre de poste créée avec succès.',
  })
  create(@Body() dto: CreateJobOfferDto, @Req() req: any) {
    return this.jobOffersService.create(dto, req.user.user_id);
  }

  @WriteThrottle()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.USER)
  @ApiBearerAuth()
  @Put(':id')
  @ApiOperation({ summary: 'Mettre à jour une offre de poste' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({
    status: 200,
    description: 'Offre de poste mise à jour avec succès.',
  })
  @ApiResponse({ status: 404, description: 'Offre de poste non trouvée.' })
  update(
    @Param('id') id: number,
    @Body() dto: UpdateJobOfferDto,
    @Req() req: any,
  ) {
    return this.jobOffersService.update(Number(id), dto, req.user.user_id);
  }

  @WriteThrottle()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.USER)
  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer une offre de poste' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({
    status: 200,
    description: 'Offre de poste supprimée avec succès.',
  })
  @ApiResponse({ status: 404, description: 'Offre de poste non trouvée.' })
  delete(@Param('id') id: number) {
    return this.jobOffersService.delete(Number(id));
  }

  @GetThrottle()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.USER)
  @ApiBearerAuth()
  @Get(':id')
  @ApiOperation({ summary: 'Récupérer une offre de poste par ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({
    status: 200,
    description: 'Offre de poste récupérée avec succès.',
  })
  @ApiResponse({ status: 404, description: 'Offre de poste non trouvée.' })
  getById(@Param('id') id: number) {
    return this.jobOffersService.getById(Number(id));
  }

  @GetThrottle()
  @UseGuards(PublicGuard)
  @Public()
  @Get('all')
  @ApiOperation({ summary: 'Récupérer toutes les offre de postes' })
  @ApiResponse({
    status: 200,
    description: 'Liste des offre de postes récupérée avec succès.',
  })
  getAll() {
    return this.jobOffersService.getAll();
  }
}
