import { Observer } from 'rxjs'

export interface IRedisSubscriber {
  subscribe<T>(channel: string, observer: Observer<T>): void
}
