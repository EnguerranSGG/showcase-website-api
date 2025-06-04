import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  UseGuards,
  Req,
} from '@nestjs/common';
import { FilesService } from './files.service';
import {
  ApiBearerAuth,
  ApiConsumes,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
  ApiBody,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Public } from '../auth/decorators/public.decorator';
import { PublicGuard } from 'src/auth/guards/public.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '@prisma/client';
import { NotFoundException } from '@nestjs/common';
import { FastifyReply } from 'fastify';
import { Res } from '@nestjs/common';
import { UploadThrottle } from '../auth/decorators/throttle.decorator';

import { lookup } from 'mime-types';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @UploadThrottle()
  @Post('upload')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.USER)
  @ApiBearerAuth()
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        title: { type: 'string' },
        file: { type: 'string', format: 'binary' },
      },
    },
  })
  @ApiOperation({ summary: 'Uploader un fichier' })
  @ApiResponse({ status: 201, description: 'Fichier uploadé avec succès.' })
  async uploadFile(@Req() req: any) {
    const parts = req.parts();
    let name = '';
    let title: string | undefined;
    let fileBuffer: Buffer | null = null;

    for await (const part of parts) {
      if (part.type === 'file') {
        fileBuffer = await part.toBuffer();
        name = part.filename || 'unknown';
      } else if (part.type === 'field' && part.fieldname === 'name') {
        name = part.value;
      } else if (part.type === 'field' && part.fieldname === 'title') {
        title = part.value;
      }
    }

    if (!fileBuffer) {
      throw new Error('Aucun fichier reçu');
    }

    return this.filesService.create(
      {
        name,
        title,
        file: fileBuffer,
      },
      req.user.user_id,
    );
  }

  @UploadThrottle()
  @Put(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.USER)
  @ApiBearerAuth()
  @ApiConsumes('multipart/form-data')
  @ApiOperation({ summary: 'Mettre à jour un fichier (contenu uniquement)' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: { type: 'string', format: 'binary' },
      },
    },
  })
  @ApiResponse({ status: 200, description: 'Fichier mis à jour avec succès.' })
  @ApiResponse({ status: 404, description: 'Fichier non trouvé.' })
  async update(@Param('id') id: number, @Req() req: any) {
    const parts = req.parts();
    let fileBuffer: Buffer | null = null;
    console.log('req.isMultipart:', req.isMultipart());

    for await (const part of parts) {
      if (part.type === 'file') {
        fileBuffer = await part.toBuffer();
      }
    }

    if (!fileBuffer) {
      throw new Error('Aucun fichier reçu');
    }

    return this.filesService.updateFileContent(
      Number(id),
      fileBuffer,
      req.user.user_id,
    );
  }

  @Put(':id/metadata')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.USER)
  @ApiBearerAuth()
  @ApiConsumes('multipart/form-data')
  @ApiOperation({ summary: "Mettre à jour le titre d'un fichier" })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        title: { type: 'string' },
      },
    },
  })
  @ApiResponse({ status: 200, description: 'Titre mis à jour avec succès.' })
  @ApiResponse({ status: 404, description: 'Fichier non trouvé.' })
  async updateMetadata(@Param('id') id: number, @Req() req: any) {
    const parts = req.parts();
    let title: string | undefined;

    for await (const part of parts) {
      if (part.type === 'field' && part.fieldname === 'title') {
        title = part.value;
      }
    }

    return this.filesService.updateFileTitle(
      Number(id),
      title,
      req.user.user_id,
    );
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.USER)
  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer un fichier' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Fichier supprimé avec succès.' })
  @ApiResponse({ status: 404, description: 'Fichier non trouvé.' })
  delete(@Param('id') id: number) {
    return this.filesService.delete(Number(id));
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.USER)
  @ApiBearerAuth()
  @Get(':id')
  @ApiOperation({ summary: 'Récupérer un fichier par ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Fichier récupéré avec succès.' })
  @ApiResponse({ status: 404, description: 'Fichier non trouvé.' })
  getById(@Param('id') id: number) {
    return this.filesService.getById(Number(id));
  }

  @UseGuards(PublicGuard)
  @Public()
  @Get('all')
  @ApiOperation({ summary: 'Récupérer tous les fichiers' })
  @ApiResponse({
    status: 200,
    description: 'Liste des fichiers récupérée avec succès.',
  })
  getAll() {
    return this.filesService.getAll();
  }

  @UseGuards(PublicGuard)
  @Public()
  @Get(':id/title')
  @ApiOperation({ summary: 'Récupérer le titre d\'un fichier par ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ 
    status: 200, 
    description: 'Titre du fichier récupéré avec succès.',
    content: {
      'text/plain': {
        schema: {
          type: 'string',
          example: 'Mon document important'
        }
      }
    }
  })
  @ApiResponse({ status: 404, description: 'Fichier non trouvé.' })
  async getTitleById(@Param('id') id: number, @Res() res: FastifyReply) {
    const result = await this.filesService.getTitleById(Number(id));
    res
      .header('Content-Type', 'text/plain; charset=utf-8')
      .send(result.title || '');
  }

  @ApiTags('Files')
  @Get(':id/download')
  @Public()
  @ApiOperation({ summary: 'Télécharger un fichier' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Fichier téléchargé avec succès.' })
  @ApiResponse({ status: 404, description: 'Fichier non trouvé.' })
  async downloadFile(@Param('id') id: number, @Res() res: FastifyReply) {
    const file = await this.filesService.getById(Number(id));

    if (!file) {
      throw new NotFoundException('Fichier non trouvé');
    }

    const mimeType = lookup(file.name) || 'application/octet-stream';

    res
      .header('Content-Disposition', `inline; filename="${file.name}"`)
      .header('Content-Type', mimeType)
      .send(file.file);
  }
}
