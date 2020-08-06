import {DefaultCrudRepository} from '@loopback/repository';
import {Station, StationRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class StationRepository extends DefaultCrudRepository<
  Station,
  typeof Station.prototype.id,
  StationRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Station, dataSource);
  }
}
