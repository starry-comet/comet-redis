import 'reflect-metadata'
import { Container, interfaces } from 'inversify'
import * as Redis from 'ioredis'

export const container = new Container();

import { ARedisPublisher } from './redis/ARedisPublisher'
import { RedisPublisher } from './redis/impl/RedisPublisher'
import { ARedisSubscriber } from './redis/ARedisSubscriber'
import { RedisSubscriber } from './redis/impl/RedisSubscriber'

container.bind<Redis.Redis>(Redis).toDynamicValue((context: interfaces.Context): Redis.Redis => new Redis())

container.bind<ARedisPublisher>(ARedisPublisher).to(RedisPublisher)
container.bind<ARedisSubscriber>(ARedisSubscriber).to(RedisSubscriber)
