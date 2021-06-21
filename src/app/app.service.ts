import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()

export class AppService{
    allowToFirst:boolean=false;
    constructor(private http:HttpClient){}

  

    getCountries():Observable<any>{
        return this.http.get("https://restcountries.eu/rest/v2/all");
    }
    getCountryNames():Observable<any>{
        return this.http.get("https://restcountries.eu/rest/v2/name/eesti");
    }
    getCountryNames1(name):Observable<any>{
        return this.http.get("https://restcountries.eu/rest/v2/name/"+name);
    }
}