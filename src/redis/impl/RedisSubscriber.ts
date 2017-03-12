import { injectable, inject } from 'inversify'
import { Observable, Observer } from 'rxjs'
import * as Redis from 'ioredis'

import { ARedisSubscriber } from '../ARedisSubscriber'

@injectable()
export class RedisSubscriber extends ARedisSubscriber {

  public subscribe<T>(channel: string): Observable<T> {
    return Observable.create((observer: Observer<T>): void => {
      this.$redis.subscribe(channel, (error: Error, count: number): void => {
        if (error) {
          return observer.error(error)
        }
      })

      this.$redis.on('message', (chan: string, message: T): void => {
        if (channel === chan) {
          return observer.next(message)
        }
      })
    })
  }

  @inject(Redis)
  private $redis: Redis.Redis
}
