import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
import { URLS } from 'src/common/constants';
import { getDistanceFromLatLonInKm } from 'src/common/helpers/code.helper';
import { Connection, Repository } from 'typeorm';
import { DistanceHistoryDto, FindAllQueryDto } from '../../common/dto';
import { DistanceHistory } from '../../common/entities';
import {
  CodeHelper,
  throwException,
  TransactionHelper,
} from '../../common/helpers';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(DistanceHistory)
    private readonly locationRepository: Repository<DistanceHistory>,
    private readonly connection: Connection,
  ) {}

  async findAll(query: FindAllQueryDto) {
    try {
      query.isActive = CodeHelper.getActiveFromQuery(query.active);
      const selectResult = await this.locationRepository.find({
        order: { createdAt: 'DESC' },
      });
      return selectResult;
    } catch (error) {
      throwException(error, error.msg);
    }
  }

  async create(distanceHistory: DistanceHistoryDto) {
    const queryRunner = await TransactionHelper.startTransaction(
      this.connection,
    );
    const locationRepository =
      queryRunner.manager.getRepository(DistanceHistory);
    let response;
    try {
      const results = await axios
        .all(
          [distanceHistory.firstLocation, distanceHistory.secondLocation].map(
            (query) =>
              axios.get(URLS.SEARCH_URL, {
                params: {
                  q: query,
                  format: 'json',
                },
              }),
          ),
        )
        .then((data) => data.map((res) => res.data));
      const firstLocation = results[0][0];
      const secondLocation = results[1][0];
      const newDistanceCalculation: Partial<DistanceHistory> = {
        latitude1: firstLocation.lat,
        longitude1: firstLocation.lon,
        displayName1: firstLocation.display_name,
        latitude2: secondLocation.lat,
        longitude2: secondLocation.lon,
        displayName2: secondLocation.display_name,
        distance: getDistanceFromLatLonInKm(
          parseFloat(firstLocation.lat),
          parseFloat(firstLocation.lon),
          parseFloat(secondLocation.lat),
          parseFloat(secondLocation.lon),
        ),
      };
      await locationRepository.save(newDistanceCalculation);
      await queryRunner.commitTransaction();
      response = newDistanceCalculation;
    } catch (error) {
      response = ['error'];
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();

      return response;
    }
  }
}
