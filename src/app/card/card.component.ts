import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { WeatherinputService } from '../services/weatherinput.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  currentData:any;
  hourlyData:any;
  dailyData:any;
  errorMessage:any;
  day:any;
  date:any;



constructor(
  private WeatherService:WeatherService,
  private weatherinputService:WeatherinputService
  ){}

  ngOnInit(): void {
    this.weatherinputService.city$.subscribe((city)=>{
      this.errorMessage = null;

      this.WeatherService.getCurrentData(city).subscribe((data)=>{
        this.currentData=data; 
       },
       (error) => {
        this.errorMessage = 'Invalid entry of city,Error fetching current weather data. Please try again.';
        this.clearErrorMessageAfterTimeout()
      })
    this.WeatherService.gethourlyData(city).subscribe((data)=>{
      this.hourlyData=data;
      
    })
    this.WeatherService.getdailyData(city).subscribe((data)=>{
      this.dailyData=data;
    })
    
    })   
  }
  clearErrorMessageAfterTimeout() {
    setTimeout(() => {
      this.errorMessage = null;
    }, 3000)

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const d = new Date();
let day = d.getDay()
this.day = weekday[day]
let date = d.getDate();
this.date=date
}










}



  /*
 constructor(private weatherData:WeatherService){}
  ngOnInit(): void {
    this.weatherData.inputData$.subscribe((data)=>{
      this.displayData=data
      console.log(this.displayData)
    })
      
  }

}
*/
