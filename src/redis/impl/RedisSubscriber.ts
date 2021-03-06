import { Injectable, Inject } from 'comet-ioc'
import { Observer, Observable } from 'rxjs'
import { Redis } from 'ioredis'

import { RedisToken } from '../RedisToken'
import { IRedisSubscriber } from '../IRedisSubscriber'

@Injectable()
export class RedisSubscriber implements IRedisSubscriber {
    subscribe<T>(channel: string, observer: Observer<T>): void {
      Observable.create((observer: Observer<T>): void => {
        this.$redis.subscribe(channel, (error: Error, count: number): void => {
          if (error) {
            return observer.error(error)
          }
        })

        this.$redis.on('message', (channel: string, message: T): void => {
          observer.next(message)
        })
      }).subscribe(observer)
    }

    @Inject(RedisToken)
    private $redis: Redis
}
