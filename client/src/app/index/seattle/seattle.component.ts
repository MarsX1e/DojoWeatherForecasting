import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Http} from "@angular/http"
@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SeattleComponent implements OnInit {
  city:string;
  Humidity:string;
  TempreatureAverage:string;
  TempreatureHigh:string;
  TempreatureLow:string;
  Status:string;
  constructor(private _route:ActivatedRoute,private _http:Http) { 
    console.log("here");
    this._route.paramMap.subscribe(params=>{
      this.city=params.get("city");
      console.log(params.get("city"));
      this._http.get(`https://api.openweathermap.org/data/2.5/weather?q=${params.get("city")}&APPID=48672a9614c366f65f9caae1ff0c0cee`).subscribe(data=>{
        console.log(data.json().main)
        this.Humidity=data.json().main.humidity;
        this.TempreatureAverage=data.json().main.temp;
        this.TempreatureHigh=data.json().main.temp_max;
        this.TempreatureLow=data.json().main.temp_min;
        this.Status=data.json().weather[0].main;
      });

      
    })
  }

  ngOnInit() {
  }

}
