import {hasMany, Model, model, property} from '@loopback/repository';
import {Station} from './station.model';

@model({settings: {strict: true}})
export class Route extends Model {
  @property({
    type: 'number',
    required: true,
  })
  cost: number;

  @hasMany(() => Station)
  stations: Station[];

  constructor(data?: Partial<Route>) {
    super(data);
  }
}

export interface RouteRelations {
  // describe navigational properties here
}

export type RouteWithRelations = Route & RouteRelations;
