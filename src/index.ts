import { interfaces } from 'inversify'
import * as Redis from 'ioredis'

import { container } from './inversify.config'
import { ARedisPublisher } from './redis/ARedisPublisher'
import { ARedisSubscriber } from './redis/ARedisSubscriber'

export function setRedisURI(uri?: string) {
  container.rebind<Redis.Redis>(Redis).toDynamicValue((context: interfaces.Context): Redis.Redis => new Redis(uri))
}

export function subscriber() {
  return container.get<ARedisSubscriber>(ARedisSubscriber)
}

export function publisher() {
  return container.get<ARedisPublisher>(ARedisPublisher)
}
