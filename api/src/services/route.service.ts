import {bind, BindingScope, service} from '@loopback/core';
import {StationId} from '../aliases/StationId';
import {Route} from '../models';
import {getRandomIntInRange} from '../util/number.utils';
import {StationService} from './station.service';

@bind({scope: BindingScope.TRANSIENT})
export class RouteService {
  constructor(@service() public stationService: StationService) {}

  async find(from: StationId, to: StationId): Promise<Route[]> {
    const rtn = [];
    let n = getRandomIntInRange(10, 1);
    while (n--) {
      rtn.push(
        new Route({
          cost: getRandomIntInRange(60),
          stations: await this.stationService.getRandomStations(
            getRandomIntInRange(7, 3),
          ),
        }),
      );
    }
    return rtn;
  }
}
