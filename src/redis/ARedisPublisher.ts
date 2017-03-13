import { injectable } from 'inversify'

@injectable()
export abstract class ARedisPublisher {
  public abstract publish<T>(channel: string, message: T): void
}
