import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private methodCalledSource = new Subject<void>();
  methodCalled$ = this.methodCalledSource.asObservable();
  constructor() { }

  callMethod() {
    this.methodCalledSource.next();
  }
}
