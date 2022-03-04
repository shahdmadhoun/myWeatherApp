import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor(private http: HttpClient) {}

  getWeather(location: any){
      return this.http.get(
          'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=5d0d41f30ea4ad8a05e2a46033e0d397'
      );
  }
}
