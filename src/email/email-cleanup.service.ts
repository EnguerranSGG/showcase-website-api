import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EmailCleanupService {
  private readonly logger = new Logger(EmailCleanupService.name);

  constructor(private prisma: PrismaService) {}

  @Cron(CronExpression.EVERY_HOUR)
  async cleanupExpiredTokens() {
    try {
      const result = await this.prisma.passwordReset.deleteMany({
        where: {
          expiresAt: {
            lt: new Date(),
          },
        },
      });

      if (result.count > 0) {
        this.logger.log(`Nettoyage effectué : ${result.count} tokens expirés supprimés`);
      }
    } catch (error) {
      this.logger.error('Erreur lors du nettoyage des tokens expirés:', error);
    }
  }

  async cleanupExpiredTokensManually() {
    try {
      const result = await this.prisma.passwordReset.deleteMany({
        where: {
          expiresAt: {
            lt: new Date(),
          },
        },
      });

      this.logger.log(`Nettoyage manuel effectué : ${result.count} tokens expirés supprimés`);
      return result.count;
    } catch (error) {
      this.logger.error('Erreur lors du nettoyage manuel des tokens expirés:', error);
      throw error;
    }
  }
}
