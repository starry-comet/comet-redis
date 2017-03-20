import { Injectable, Inject } from 'comet-ioc'
import { Redis } from 'ioredis'

import { RedisToken } from '../RedisToken'
import { IRedisPublisher } from '../IRedisPublisher'

@Injectable()
export class RedisPublisher implements IRedisPublisher {
  publish<T>(channel: string, content: T): void {
    this.$redis.publish(channel, content)
  }

  @Inject(RedisToken)
  private $redis: Redis
}
