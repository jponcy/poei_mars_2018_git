import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RabbitService {

  constructor() { }

  public getAll(): Observable<Rabbit[]> {
    // return Observable.apply()
    return new Observable();
  }
}
