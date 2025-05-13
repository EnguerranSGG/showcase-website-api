import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateJobOfferDto } from './dto/create-job-offer.dto';
import { UpdateJobOfferDto } from './dto/update-job-offer.dto';

@Injectable()
export class JobOffersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateJobOfferDto, userUuid: string) {
    return this.prisma.job_offer.create({
      data: {
        name: dto.name,
        job_type: dto.job_type,
        city: dto.city ?? null,
        image_url: dto.image_url ?? null,
        link: dto.link ?? null,
        description: dto.description,
        user: { connect: { user_id: userUuid } },
        created_at: new Date(),
        updated_at: new Date(),
      },
    });
  }

  async update(id: number, dto: UpdateJobOfferDto, userUuid: string) {
    const existing = await this.prisma.job_offer.findUnique({
      where: { job_offer_id: id },
    });

    if (!existing) {
      throw new NotFoundException('Job offer not found');
    }

    return this.prisma.job_offer.update({
      where: { job_offer_id: id },
      data: {
        name: dto.name,
        job_type: dto.job_type,
        city: dto.city ?? null,
        image_url: dto.image_url ?? null,
        link: dto.link ?? null,
        description: dto.description,
        user: { connect: { user_id: userUuid } },
        updated_at: new Date(),
      },
    });
  }

  async delete(id: number) {
    return this.prisma.job_offer.delete({
      where: { job_offer_id: id },
    });
  }

  async getById(id: number) {
    return this.prisma.job_offer.findUnique({
      where: { job_offer_id: id },
    });
  }

  async getAll() {
    return this.prisma.job_offer.findMany();
  }
}
