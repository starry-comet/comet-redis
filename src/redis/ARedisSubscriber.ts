import { injectable } from 'inversify'
import { Observable } from 'rxjs'

@injectable()
export abstract class ARedisSubscriber {
  public abstract subscribe<T>(channel: string): Observable<T>
}
