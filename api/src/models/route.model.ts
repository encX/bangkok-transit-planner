import {Model, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Route extends Model {
  @property({
    type: 'number',
    required: true,
  })
  cost: number;

  @property({
    type: 'array',
    itemType: 'number',
    required: true,
  })
  stations: number[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Route>) {
    super(data);
  }
}

export interface RouteRelations {
  // describe navigational properties here
}

export type RouteWithRelations = Route & RouteRelations;
