export interface IRedisPublisher {
  publish<T>(channel: string, content: T): void
}
