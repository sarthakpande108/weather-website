import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { WeatherinputService } from '../services/weatherinput.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {  
  city:string="";
  isSubmitted=false
  constructor(private weatherinputService:WeatherinputService){}

  updateCity(){
    this.weatherinputService.updateCity(this.city)
  }



  /*searchData(){
    this.service.fetchDataFromAPI(this.city)
  }
  */
  /*
  getweatherdataBycity(){ 
    var city=this.city
    this.service.getWeatherdata(city).subscribe(data=>{
      console.log('data',data)
    })

  }
  */
  onSubmit(){
    this.isSubmitted=true;
    console.log(this.city)
  }
}
