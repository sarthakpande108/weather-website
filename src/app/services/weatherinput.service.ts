import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherinputService {
  private citySubject = new BehaviorSubject<string>('');
  city$ = this.citySubject.asObservable();
  
  updateCity(city: string) {
  this.citySubject.next(city);
}
}
