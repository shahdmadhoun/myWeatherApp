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
  public tempFarenheit = 0;
  public feelCelsius = 0;
  public feelFarenheit = 0;


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
    }

}
