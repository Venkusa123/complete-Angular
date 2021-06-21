import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AppService } from "src/app/app.service";
import { LoginService } from "./login.service";

@Component({
    selector:"bus-login",
    templateUrl:"./login.component.html",
    styleUrls:['./login.component.scss'],
    encapsulation:ViewEncapsulation.Emulated

})

export class BusLoginComponent implements OnInit{
    statesLists: any=[];
    constructor(private appService:AppService,private loginService:LoginService){}
    ngOnInit(){
      this.statesLists =[...this.loginService.statesList];
    }
    loginFormSubmit(f1:NgForm){
        console.log("Login Form is Submitted");
        console.log(f1);
           
    }
}