import { Controller, Get, Query } from '@nestjs/common';
import { LocationService } from './location.service';
import { DistanceHistoryDto, FindAllQueryDto } from '../../common/dto';

@Controller('locations')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Get('/')
  findAll(@Query() query: FindAllQueryDto) {
    return this.locationService.findAll(query);
  }

  @Get('/calculate')
  create(@Query() distanceHistory: DistanceHistoryDto) {
    return this.locationService.create(distanceHistory);
  }
}
