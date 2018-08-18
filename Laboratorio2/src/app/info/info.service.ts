import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Http} from "@angular/http";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private httpClient: Http) { 
    this.getinfo();
  }

  public getinfo(){
    return this.httpClient.get("http://cosevi.cloudapi.junar.com/api/v2/datastreams/CLASE-Y-TIPOS-DE-ACCID/data.json/?auth_key=b0191f25ec21bf892241ee767b321998c22df14d&limit=10000").map(res => res.json().result.fArray);
  }

  public getInfoSpecific(fecha , provincia){
    return this.httpClient
    .get("http://cosevi.cloudapi.junar.com/api/v2/datastreams/CLASE-Y-TIPOS-DE-ACCID/data.json/?auth_key=b0191f25ec21bf892241ee767b321998c22df14d&limit=10000")
    .map(res => res.json().result.fArray.filter(data => data.fStr == fecha || data.fStr == provincia));
  }

}