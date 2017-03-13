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

  it('Subscriber is not null', function(): void {
    notEqual(subscriber, null, 'Subscriber is null')
  })

  it('Subscriber is an instance of ARedisSubscriber', function(): void {
    ok(subscriber instanceof ARedisSubscriber, 'Subscriber is not an instanceof ARedisPublisher')
  })

  it('Subscriber can receive', function(): void {
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
