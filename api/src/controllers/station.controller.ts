import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  put,
  requestBody,
} from '@loopback/rest';
import {Station} from '../models';
import {StationRepository} from '../repositories';

export class StationController {
  constructor(
    @repository(StationRepository)
    public stationRepository: StationRepository,
  ) {}

  @post('/stations', {
    responses: {
      '200': {
        description: 'Station model instance',
        content: {'application/json': {schema: getModelSchemaRef(Station)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Station, {
            title: 'NewStation',
            exclude: ['id'],
          }),
        },
      },
    })
    station: Omit<Station, 'id'>,
  ): Promise<Station> {
    return this.stationRepository.create(station);
  }

  @get('/stations/count', {
    responses: {
      '200': {
        description: 'Station model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(@param.where(Station) where?: Where<Station>): Promise<Count> {
    return this.stationRepository.count(where);
  }

  @get('/stations', {
    responses: {
      '200': {
        description: 'Array of Station model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Station, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Station) filter?: Filter<Station>,
  ): Promise<Station[]> {
    return this.stationRepository.find(filter);
  }

  @patch('/stations', {
    responses: {
      '200': {
        description: 'Station PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Station, {partial: true}),
        },
      },
    })
    station: Station,
    @param.where(Station) where?: Where<Station>,
  ): Promise<Count> {
    return this.stationRepository.updateAll(station, where);
  }

  @get('/stations/{id}', {
    responses: {
      '200': {
        description: 'Station model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Station, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Station, {exclude: 'where'})
    filter?: FilterExcludingWhere<Station>,
  ): Promise<Station> {
    return this.stationRepository.findById(id, filter);
  }

  @patch('/stations/{id}', {
    responses: {
      '204': {
        description: 'Station PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Station, {partial: true}),
        },
      },
    })
    station: Station,
  ): Promise<void> {
    await this.stationRepository.updateById(id, station);
  }

  @put('/stations/{id}', {
    responses: {
      '204': {
        description: 'Station PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() station: Station,
  ): Promise<void> {
    await this.stationRepository.replaceById(id, station);
  }

  @del('/stations/{id}', {
    responses: {
      '204': {
        description: 'Station DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.stationRepository.deleteById(id);
  }
}
