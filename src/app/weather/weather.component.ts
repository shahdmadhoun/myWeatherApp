import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiDataService } from "../api-data.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm: any;
  public weatherData: any;
  public tempCelsius = 0;
  public feelCelsius = 0;
  public cityName = 'City';
  public weatherInfo = 'Clear';

  public photos: any[] = [
    {defult: "assets/img/Clear.jfif"},
    {Fog: "assets/img/Fog.jpg"},
    {Clear: "assets/img/Clear.jfif"},
    {Hail: "assets/img/Hail.jpg"},
    {Humidity: "assets/img/Humidity.jpg"},
    {Rain: "assets/img/Rain.jpg"},
    {Snow: "assets/img/snow.jpg"},
    {Storms: "assets/img/Storms.jpg"},
    {Temperature: "assets/img/Temperature.jfif"},
    {Wind: "../../assets/img/Wind.jfif"}

  ]

  constructor(private formBuilder: FormBuilder, private dataService: ApiDataService) { }

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }

  sendToAPIXU(formValues:any) {
    this.dataService
    .getWeather(formValues.location)
    .subscribe(data => this.weatherData = data)
    console.log(this.weatherData);

    this.tempCelsius = this.weatherData?.main.temp - 273.15;
    this.cityName = this.weatherData?.name;
    this.feelCelsius = this.weatherData?.main.feels_like - 273.15
    for (let index = 0; index < this.weatherData?.weather.length; index++) {
      this.weatherInfo = this.weatherData?.weather[index].main;
      
    }

    }

}
