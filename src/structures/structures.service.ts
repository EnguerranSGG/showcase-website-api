import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStructureDto } from './dto/create-structure.dto';
import { UpdateStructureDto } from './dto/update-structure.dto';

@Injectable()
export class StructuresService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateStructureDto, user_id: string) {
    console.log('StructureService | DTO après validation :', dto);
    const structure = await this.prisma.structure.create({
      data: {
        name: dto.name,
        file: dto.file_id ? { connect: { file_id: dto.file_id } } : undefined,
        structure_type: dto.structure_type_id
          ? { connect: { structure_type_id: dto.structure_type_id } }
          : undefined,
        description: dto.description,
        address: dto.address ?? null,
        phone_number: dto.phone_number ?? null,
        created_at: new Date(),
        updated_at: new Date(),
        link: dto.link ?? null,
        user: {
          connect: { user_id },
        },
      },
    });

    // Créer les missions si présentes
    if (dto.missions!.length > 0) {
      await this.prisma.mission.createMany({
        data: dto.missions!.map((mission) => ({
          content: mission.content,
          structure_id: structure.structure_id,
          user_id,
        })),
      });
    }

    return structure;
  }

  async update(id: number, dto: UpdateStructureDto, user_id: string) {
    // On met à jour les données de base de la structure
    const updated = await this.prisma.structure.update({
      where: { structure_id: id },
      data: {
        name: dto.name,
        file: dto.file_id
          ? { connect: { file_id: dto.file_id } }
          : { disconnect: true },
        structure_type: dto.structure_type_id
          ? { connect: { structure_type_id: dto.structure_type_id } }
          : { disconnect: true },
        description: dto.description,
        address: dto.address,
        phone_number: dto.phone_number,
        link: dto.link,
        updated_at: new Date(),
      },
    });

    // 🔁 Supprimer les missions existantes (liées à cette structure)
    await this.prisma.mission.deleteMany({
      where: { structure_id: id },
    });

    // ➕ Ajouter les nouvelles missions s'il y en a
    if (dto.missions!.length > 0) {
      await this.prisma.mission.createMany({
        data: dto.missions!.map((mission) => ({
          content: mission.content,
          structure_id: id,
          user_id,
        })),
      });
    }

    return updated;
  }

  async delete(structure_id: number) {
    await this.prisma.mission.deleteMany({
      where: { structure_id },
    });

    return this.prisma.structure.delete({
      where: { structure_id },
    });
  }

  async getById(id: number) {
    const structure = await this.prisma.structure.findUnique({
      where: { structure_id: id },
    });
    if (!structure) throw new NotFoundException('Structure non trouvée');
    return structure;
  }

  getAll() {
    // ⚠️ OPTIMISATION : Exclure le champ 'file.file' (données binaires) pour améliorer les performances
    return this.prisma.structure.findMany({
      include: {
        missions: true,
        file: {
          select: {
            file_id: true,
            name: true,
            title: true,
            created_at: true,
            updated_at: true,
            user_id: true,
            // Ne PAS inclure 'file' (Bytes) - utiliser /files/:id/download pour télécharger
          },
        },
        structure_type: true,
      },
    });
  }

  /**
   * Récupère toutes les structures sans les missions (pour le site vitrine)
   * Les missions peuvent être récupérées séparément via l'endpoint /missions/structure/:id
   */
  getAllForPublic() {
    // ⚠️ OPTIMISATION : Exclure le champ 'file.file' (données binaires) pour améliorer les performances
    return this.prisma.structure.findMany({
      include: {
        file: {
          select: {
            file_id: true,
            name: true,
            title: true,
            created_at: true,
            updated_at: true,
            user_id: true,
            // Ne PAS inclure 'file' (Bytes) - utiliser /files/:id/download pour télécharger
          },
        },
        structure_type: true,
        // On inclut seulement le count des missions pour savoir si une structure a des missions
        _count: {
          select: {
            missions: true,
          },
        },
      },
    });
  }

  async getByTypeName(typeName: string) {
    // ⚠️ OPTIMISATION : Exclure le champ 'file.file' (données binaires) pour améliorer les performances
    const structures = await this.prisma.structure.findMany({
      where: {
        structure_type: {
          name: typeName,
        },
      },
      include: {
        missions: true,
        file: {
          select: {
            file_id: true,
            name: true,
            title: true,
            created_at: true,
            updated_at: true,
            user_id: true,
            // Ne PAS inclure 'file' (Bytes) - utiliser /files/:id/download pour télécharger
          },
        },
        structure_type: true,
      },
    });

    if (!structures || structures.length === 0) {
      throw new NotFoundException(
        `Aucune structure trouvée pour le type: ${typeName}`,
      );
    }

    return structures;
  }
}
