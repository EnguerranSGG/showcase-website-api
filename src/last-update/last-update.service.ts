import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class LastUpdateService {
  constructor(private readonly prisma: PrismaService) {}

  async getLastUpdate(): Promise<{ lastUpdate: Date; entity: string }> {
    const queries = [
      this.prisma.partner.findFirst({ orderBy: { updated_at: 'desc' }, select: { updated_at: true } }),
      this.prisma.counselor.findFirst({ orderBy: { counselor_id: 'desc' }, select: { counselor_id: true } }),
      this.prisma.presentation.findFirst({ orderBy: { presentation_id: 'desc' }, select: { presentation_id: true } }),
      this.prisma.time.findFirst({ orderBy: { updated_at: 'desc' }, select: { updated_at: true } }),
      this.prisma.job_offer.findFirst({ orderBy: { updated_at: 'desc' }, select: { updated_at: true } }),
      this.prisma.structure.findFirst({ orderBy: { updated_at: 'desc' }, select: { updated_at: true } }),
      this.prisma.mission.findFirst({ orderBy: { mission_id: 'desc' }, select: { mission_id: true } }),
      this.prisma.statistic.findFirst({ orderBy: { updated_at: 'desc' }, select: { updated_at: true } }),
      this.prisma.news.findFirst({ orderBy: { updated_at: 'desc' }, select: { updated_at: true } }),
      this.prisma.value.findFirst({ orderBy: { updated_at: 'desc' }, select: { updated_at: true } }),
      this.prisma.step.findFirst({ orderBy: { updated_at: 'desc' }, select: { updated_at: true } }),
      this.prisma.path.findFirst({ orderBy: { updated_at: 'desc' }, select: { updated_at: true } }),
      this.prisma.file.findFirst({ orderBy: { updated_at: 'desc' }, select: { updated_at: true } }),
      this.prisma.type.findFirst({ orderBy: { updated_at: 'desc' }, select: { updated_at: true } }),
      this.prisma.structureType.findFirst({ orderBy: { updated_at: 'desc' }, select: { updated_at: true } }),
    ];

    const results = await Promise.all(queries);
    
    const entityNames = [
      'partner', 'counselor', 'presentation', 'time', 'job_offer', 
      'structure', 'mission', 'statistic', 'news', 'value', 
      'step', 'path', 'file', 'type', 'structureType'
    ];

    let lastUpdate: Date | null = null;
    let lastEntity: string = '';

    results.forEach((result, index) => {
      if (result) {
        const updateDate = 'updated_at' in result ? result.updated_at : null;
        if (updateDate && (!lastUpdate || updateDate > lastUpdate)) {
          lastUpdate = updateDate;
          lastEntity = entityNames[index];
        }
      }
    });

    // Si aucune date de mise à jour n'est trouvée, on utilise la date actuelle
    if (!lastUpdate) {
      lastUpdate = new Date();
      lastEntity = 'none';
    }

    return {
      lastUpdate,
      entity: lastEntity
    };
  }
}
