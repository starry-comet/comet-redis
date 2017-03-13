import { injectable, inject } from 'inversify'
import * as Redis from 'ioredis'

import { ARedisPublisher } from '../ARedisPublisher'

@injectable()
export class RedisPublisher extends ARedisPublisher {

  public publish<T>(channel: string, message: T): void {
    this.$redis.publish(channel, message)
  }

  @inject(Redis)
  private $redis: Redis.Redis
}
