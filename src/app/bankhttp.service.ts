import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

import { HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


@Injectable({
  providedIn: 'root'
})

export class BankhttpService {

  public a1 = [];
  private baseUrl = "https://vast-shore-74260.herokuapp.com/banks";
  public city1 = "BANGALORE"
  public city2 = "MUMBAI"
  public city3 = "DELHI"
  public city4 = "CHENNAI"
  public city5 = "HYDERABAD"



  constructor(private _http: HttpClient) {
    console.log('Bank http service called');
  }

  private handleError(err: HttpErrorResponse) {
    console.log('Handle http error');
    console.log(err.message);
    return Observable.throw(err.message);
  }

  public getBangaloreBranches(): Observable<any> {

    let myResponse = this._http.get(this.baseUrl + '?city=' + this.city1);
    //console.log(myResponse);
    return myResponse;
  }

  public getMumbaiBranches(): Observable<any> {

    let myResponse = this._http.get(this.baseUrl + '?city=' + this.city2);
    //console.log(myResponse);
    return myResponse;
  }


  public getDelhiBranches(): Observable<any> {

    let myResponse = this._http.get(this.baseUrl + '?city=' + this.city3);
    //console.log(myResponse);
    return myResponse;
  }

  public getChennaiBranches(): Observable<any> {

    let myResponse = this._http.get(this.baseUrl + '?city=' + this.city4);
    //console.log(myResponse);
    return myResponse;
  }

  public getHyderabadBranches(): Observable<any> {

    let myResponse = this._http.get(this.baseUrl + '?city=' + this.city5);
    //console.log(myResponse);
    return myResponse;
  }
}


