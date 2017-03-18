import { ok } from 'assert'
import { bootstrap, inject, injectable } from 'comet-ioc'

import { RedisModule, RedisFactory, RedisPublisher, RedisSubscriber, RedisToken } from './index'

@injectable()
class App {
  @inject(RedisPublisher)
  $publisher: RedisPublisher

  @inject(RedisSubscriber)
  $subscriber: RedisSubscriber
}

describe('Imports', function() {
  let app: App

  before('load', function() {
    app = bootstrap(App, {
      imports: [
        RedisModule
      ],

      providers: [{
        provide: RedisToken,
        useFactory() {
          return RedisFactory()
        }
      }]
    })
  })

  it('Subscriber', function() {
    ok(app.$subscriber instanceof RedisSubscriber, 'injection failed')
  })

  it('Publisher', function() {
    ok(app.$publisher instanceof RedisPublisher, 'injection failed')
  })
})
