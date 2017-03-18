import { IBootstrapDependencies } from 'comet-ioc'
import * as io from 'ioredis'

import { RedisPublisher } from './redis/impl/RedisPublisher'
import { RedisSubscriber } from './redis/impl/RedisSubscriber'

export { Redis } from 'ioredis'
export { RedisToken } from './redis/RedisToken'
export { IRedisPublisher } from './redis/IRedisPublisher'
export { IRedisSubscriber } from './redis/IRedisSubscriber'
export { RedisPublisher } from './redis/impl/RedisPublisher'
export { RedisSubscriber } from './redis/impl/RedisSubscriber'

export const RedisModule: IBootstrapDependencies = {
  declarations: [
    RedisPublisher,
    RedisSubscriber
  ]
}

export function RedisFactory(options?: io.RedisOptions | string): io.Redis {
  return new io(options)
}
