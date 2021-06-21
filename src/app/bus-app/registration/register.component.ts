import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from "@angular/forms";
import { debounceTime, switchMap } from "rxjs/operators";
import { AppService } from "src/app/app.service";
import { ImpurePipeComponent } from "src/app/pipes/custom-pipe2";

@Component({
    selector:'app-bus-register',
    templateUrl:"./register.component.html",
    styleUrls:['./register.component.scss'],
    encapsulation:ViewEncapsulation.Emulated
})

export class BusRegistrationComponent implements OnInit{
    birthDate =new Date();
    textInSmall="this text is in small but by using uppercase it is converted into Uppercase letters";
    textInUpper = "ALL ARE IN CAPITAL LETTERS.BUT WE ARE USING LOWERCASE PIPE SO ALL ARE CONVERTED INTO LOWERCASE FORMAT"
    currency = 195;
    seatNumbers:any=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];
    busReservationForm:FormGroup;arr1=[];
    ngOnInit(){
        this.busReservationForm = this.fb.group({
            fromStn:["",[Validators.required,Validators.minLength(5),Validators.maxLength(8)]],
            toStn:["",Validators.required],
            emailDomain1:['',[Validators.required,emailDomain]]
        })
        this.busReservationForm.valueChanges.pipe(
            debounceTime(1000),
            switchMap(
                ()=>this.appService.getCountryNames()
                )
            ).subscribe(item=>{
            console.log(item);
        })
        this.busReservationForm.controls.toStn.valueChanges.subscribe(item=>{
            
            console.log(this.impurePipeComponent.transform(item));
            
        })
    }
    constructor(public fb:FormBuilder,private appService:AppService,private impurePipeComponent:ImpurePipeComponent){

    }
    keyUp(){
        console.log("key");
        
    }
    logKeyValuePairs(busReservationForm:FormGroup){
    console.log(Object.keys(busReservationForm.controls))
    Object.keys(busReservationForm.controls).forEach(formControlKey=>{
        console.log("Key="+formControlKey+"Value is:-"+busReservationForm.get(formControlKey).value);
    })
    }
    reservation(){
        this.logKeyValuePairs(this.busReservationForm)
        if(this.busReservationForm.valid){
            console.log(this.busReservationForm.value);
            console.log(this.busReservationForm);        
        }else{
            console.log("form is invalid");
            console.log(this.busReservationForm.controls);
            console.log(this.busReservationForm);
        }
    }
    resetForm(){
        this.busReservationForm.patchValue({
            fromStn:["Enter From Station"],
            toStn:["Enter To Station"]
        })
    }
 
}
function emailDomain(control:AbstractControl):{[key:string]:any}|null{
    const email = control.value;
    let domain = email.substring(email.lastIndexOf('@')+1);
    if(domain.toLowerCase() === 'gmail.com'){
        return null;
    }else{
        return {'emailDomain':true}
    }
}
