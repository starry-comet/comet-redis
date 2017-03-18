import { injectable, inject } from 'comet-ioc'
import { Redis } from 'ioredis'

import { RedisToken } from '../RedisToken'
import { IRedisPublisher } from '../IRedisPublisher'

@injectable()
export class RedisPublisher implements IRedisPublisher {
  publish<T>(channel: string, content: T): void {
    this.$redis.publish(channel, content)
  }

  @inject(RedisToken)
  private $redis: Redis
}
