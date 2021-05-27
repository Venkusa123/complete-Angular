import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()

export class AppService{
    constructor(private http:HttpClient){}

    getCountries(){
        return this.http.get("https://restcountries.eu/rest/v2/all");
    }
    getCountryNames(){
        return this.http.get("https://restcountries.eu/rest/v2/name/eesti");
    }
}