import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {
//apiKey='522264073e16ce72';
//apiKey='f74fe9cfbade9df0';
apiKey='8d9d9afe45dbcb083e491c06ff149a33';
url;
  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    //this.url='https://api.wunderground.com/api/'+this.apiKey+'/conditions/q';
    this.url='http://api.openweathermap.org/data/2.5/weather?q=';
  }
  getWeather(city,state){
    return this.http.get(this.url+city+'&units=metric&APPID='+this.apiKey);
    //return this.http.get(this.url+'/'+state+'/'+city+'.json');

  }

}
