import {bind, /* inject, */ BindingScope} from '@loopback/core';
import {repository} from '@loopback/repository';
import {Station} from '../models';
import {StationRepository} from '../repositories';
import {getRandomIntInRange} from '../util/number.utils';

@bind({scope: BindingScope.TRANSIENT})
export class StationService {
  constructor(
    @repository(StationRepository)
    public stationRepository: StationRepository,
  ) {}

  async getRandomStations(count: number): Promise<Station[]> {
    const stations = await this.stationRepository.find();
    const stationCount = stations.length;
    const rtn = [];

    while (count--) rtn.push(stations[getRandomIntInRange(stationCount)]);

    return rtn;
  }
}
