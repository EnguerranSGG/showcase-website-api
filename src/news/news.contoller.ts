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
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
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


@ApiTags('News')
@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @WriteThrottle()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.USER)
  @ApiBearerAuth()
  @Post('add')
  @ApiOperation({ summary: 'Créer une actualité' })
  @ApiResponse({ status: 201, description: 'Actualité créée avec succès.' })
  create(@Body() dto: CreateNewsDto, @Req() req: any) {
    return this.newsService.create(dto, req.user.user_id);
  }

  @WriteThrottle()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.USER)
  @ApiBearerAuth()
  @Put(':id')
  @ApiOperation({ summary: 'Mettre à jour une actualité' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({
    status: 200,
    description: 'Actualité mise à jour avec succès.',
  })
  @ApiResponse({ status: 404, description: 'Actualité non trouvée.' })
  update(@Param('id') id: number, @Body() dto: UpdateNewsDto, @Req() req: any) {
    return this.newsService.update(Number(id), dto, req.user.user_id);
  }

  @WriteThrottle()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.USER)
  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer une actualité' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Actualité supprimée avec succès.' })
  @ApiResponse({ status: 404, description: 'Actualité non trouvée.' })
  delete(@Param('id') id: number) {
    return this.newsService.delete(Number(id));
  }

  @GetThrottle()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.USER)
  @ApiBearerAuth()
  @Get(':id')
  @ApiOperation({ summary: 'Récupérer une actualité par son ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Actualité récupérée avec succès.' })
  @ApiResponse({ status: 404, description: 'Actualité non trouvée.' })
  getById(@Param('id') id: number) {
    return this.newsService.getById(Number(id));
  }

  @GetThrottle()
  @Get('latest')
  @UseGuards(PublicGuard)
  @Public()
  @ApiOperation({ summary: 'Récupérer la dernière actualité' })
  @ApiResponse({
    status: 200,
    description: 'Dernière actualité récupérée avec succès.',
  })
  getLatest() {
    return this.newsService.getLatest();
  }

  @GetThrottle()
  @UseGuards(PublicGuard)
  @Public()
  @Get('all')
  @ApiOperation({ summary: 'Récupérer toutes les actualités' })
  @ApiResponse({
    status: 200,
    description: 'Liste des actualités récupérée avec succès.',
  })
  getAll() {
    return this.newsService.getAll();
  }
}
