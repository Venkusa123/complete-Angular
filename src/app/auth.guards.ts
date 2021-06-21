import { Injectable } from "@angular/core";
import { CanActivate, CanActivateChild, Router } from "@angular/router";
import { AppService } from "./app.service";

@Injectable()
export class AuthGuardComponent implements CanActivate,CanActivateChild{
    constructor(private appService:AppService,private router:Router){
    }
    canActivate():boolean{
        if(this.appService.allowToFirst){
            // this.router.navigateByUrl('/bus/bus/login');
            return true;
        }
    }
    canActivateChild(){
        if(this.appService.allowToFirst){
            return true;
        }
    }
}