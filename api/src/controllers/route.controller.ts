import {service} from '@loopback/core';
import {param, get, getModelSchemaRef} from '@loopback/rest';
import {StationId} from '../aliases/StationId';
import {Route} from '../models';
import {RouteService} from '../services';

export class RouteController {
  constructor(@service() public routesService: RouteService) {}

  @get('/routes', {
    responses: {
      '200': {
        description: 'Routes as list',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Route, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param({
      in: 'query',
      name: 'from',
      schema: {type: 'integer'},
      required: true,
    })
    from: StationId,
    @param({
      in: 'query',
      name: 'to',
      schema: {type: 'integer'},
      required: true,
    })
    to: StationId,
  ): Promise<Route[]> {
    return this.routesService.find(from, to);
  }
}
