import { Controller, Get } from '@nestjs/common';
import { LastUpdateService } from './last-update.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Public } from '../auth/decorators/public.decorator';

@ApiTags('Last Update')
@Controller('last-update')
export class LastUpdateController {
  constructor(private readonly lastUpdateService: LastUpdateService) {}

  @Public()
  @Get()
  @ApiOperation({ summary: 'Récupérer la date de la dernière modification' })
  @ApiResponse({ 
    status: 200, 
    description: 'Date de la dernière modification récupérée avec succès.',
    schema: {
      type: 'object',
      properties: {
        lastUpdate: {
          type: 'string',
          format: 'date-time',
          description: 'Date de la dernière modification'
        },
        entity: {
          type: 'string',
          description: 'Nom de l\'entité qui a été modifiée en dernier'
        }
      }
    }
  })
  async getLastUpdate() {
    return this.lastUpdateService.getLastUpdate();
  }
}
