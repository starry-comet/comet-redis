import { notEqual, ok } from 'assert'

import { container } from '../../inversify.config'
import { ARedisPublisher } from '../ARedisPublisher'
import { ARedisSubscriber } from '../ARedisSubscriber'

describe('Test RedisPublisher', function(): void {
  let publisher: ARedisPublisher
  let subscriber: ARedisSubscriber

  before('Get publisher', function(): void {
    publisher = container.get<ARedisPublisher>(ARedisPublisher)
  })

  before('Get subscriber', function(): void {
    subscriber = container.get<ARedisSubscriber>(ARedisSubscriber)
  })

  it('Publisher is not null', function(): void {
    notEqual(publisher, null, 'Publisher is null')
  })

  it('Publisher is an instance of ARedisPublisher', function(): void {
    ok(publisher instanceof ARedisPublisher, 'Publisher is not an instanceof ARedisPublisher')
  })

  it('Publisher can publish', function(): void {
    subscriber.subscribe<string>('test').subscribe({
      next(message: string) {
        ok(true)
      },

      error(error: Error) {
        ok(false)
      }
    })

    publisher.publish('test', 'test')
  })
})
