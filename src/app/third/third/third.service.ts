import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()

export class ThirdService{
    constructor(private httpClient:HttpClient){}

    getCountries():Observable<any>{
        return this.httpClient.get("https://restcountries.eu/rest/v2/all");
    }
}