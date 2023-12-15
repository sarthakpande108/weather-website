import { HttpClient,HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { SearchComponent } from '../search/search.component';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey =environment.apiKey;
  private units="metric";
  private cnt=3;
  private apiUrl = 'https://api.openweathermap.org/data/2.5';
  private apiUrlDaily="https://api.weatherbit.io/v2.0/forecast/daily"
  private apiKeyDaily="93c64c1e129a4b6b80082054cccea8da"
  private currentWeatherEndpoint = '/weather';
  private hourlyForecastEndpoint = '/forecast';
  


  constructor(private http:HttpClient) {}
  
  getCurrentData(city: string):Observable<any>{  
  const params = new HttpParams().set('q', city).set('units',this.units).set('appid', this.apiKey);
  return this.http.get(this.apiUrl + this.currentWeatherEndpoint, { params })
  }


  gethourlyData(city:string):Observable<any>{
    const params =new  HttpParams().set('q',city).set('units',this.units).set('cnt',3).set('appid', this.apiKey)
    return this.http.get(this.apiUrl + this.hourlyForecastEndpoint, { params })
  }

  getdailyData(city:string):Observable<any>{
    const params =new  HttpParams().set('city',city).set('key', this.apiKeyDaily).set('days',3)
    return this.http.get(this.apiUrlDaily , { params })
    

  }
}


 










  /*
  fetchDataFromAPI(city: string) {
    var q=city;
    var units="metric";
    var appid=['6dfec7db42eb9bd637062e95b19b1abf']
    return this.http.get('https://api.openweathermap.org/data/2.5/weather',{params:{q,appid,units}}).subscribe((data:any)=>{
      const result=data
      this.getCurrentData(result)
    })
  }
}
 */