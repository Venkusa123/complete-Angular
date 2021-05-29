import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { AppService } from "./app.service";

@Injectable()
export class AuthGuardComponent implements CanActivate{
    constructor(private appService:AppService){
    }
    canActivate():boolean{
        if(this.appService.allowToFirst){
            return true;
        }
    }
    canActivateChild(){
        if(this.appService.allowToFirst){
            return true;
        }
    }
}