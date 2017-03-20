import { ok } from 'assert'
import { bootstrap, Inject, Injectable } from 'comet-ioc'

import { RedisModule, RedisFactory, RedisPublisher, RedisSubscriber, RedisToken } from './index'

@Injectable()
class App {
  @Inject(RedisPublisher)
  $publisher: RedisPublisher

  @Inject(RedisSubscriber)
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
    ok(app.$subscriber instanceof RedisSubscriber, 'Injection failed')
  })

  it('Publisher', function() {
    ok(app.$publisher instanceof RedisPublisher, 'Injection failed')
  })
})
