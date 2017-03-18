comet-redis
======

[![NSP Status](https://nodesecurity.io/orgs/starry-comet/projects/8f393709-8b9a-4187-8b55-38221d333368/badge)](https://nodesecurity.io/orgs/starry-comet/projects/8f393709-8b9a-4187-8b55-38221d333368)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/0221f05bb77c4502b3c7816327f433f4)](https://www.codacy.com/app/miton18/comet-redis?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=starry-comet/comet-redis&amp;utm_campaign=Badge_Grade)

<p align="center">
  <img height="200" src="https://github.com/starry-comet/comet/blob/master/resources/images/comet.png?raw=true">
</p>

## Roles

This project has to main to give a lightweight redis client that allow to you to easily subscribe and publish between components.

## Usage

To use comet-redis, below an example

```ts
import {injectable, inject} from 'comet-ioc'
import {RedisPublisher, RedisSubscriber} from 'comet-redis'

@injectable()
export class MainClass {
  public constructor(
    @inject(RedisPublisher) $publisher: RedisPublisher
    @inject(RedisSubscriber) $subscriber: RedisSubscriber
  ) {
    $subscriber.subscribe<string>('channel', {
      next(message: string): void {
        console.log(message)
      },

      error(error: Error): void {},
      complete(): void {}
    })

    setTimeout(() => {
      $publisher.publish('channel', 'hi !')
    }, 1000)
  }
}
```

```ts
import {bootstrap, interfaces} from 'comet-ioc'
import {RedisModule, RedisToken, RedisFactory, Redis} from 'comet-redis'

import {MainClass} from './a/file'

bootstrap(MainClass, {
  imports: [RedisModule],
  providers: [{
    provide: RedisToken,
    useFactory(context: interfaces.Context): Redis {
      return RedisFactory('redis://127.0.0.1:6379')
    }
  }]
})
```

result:
```
hi !
```
