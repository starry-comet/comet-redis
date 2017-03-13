import 'reflect-metadata'
import { notEqual, ok } from 'assert'

import { ARedisPublisher } from './redis/ARedisPublisher'
import { ARedisSubscriber } from './redis/ARedisSubscriber'
import { publisher, subscriber } from './index'

describe('Test index', function(): void {
  it('Get publisher', function(): void {
    notEqual(publisher(), null, 'Publisher is null')
    ok(publisher() instanceof ARedisPublisher, 'Publisher is not an instance of APublisher')
  })

  it('Get subcriber', function(): void {
    notEqual(subscriber(), null, 'Subscriber is null')
    ok(subscriber() instanceof ARedisSubscriber, 'Subscriber is not an instance of APublisher')
  })
})
