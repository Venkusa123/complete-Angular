import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { AppService } from 'src/app/app.service';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class SecondComponent implements OnInit {


  
  @Input('firstVar') firstVar;
  @Input('secondVar') secondVar;
  @Output() sdata=new EventEmitter;
  constructor(private fb:FormBuilder,private activatedRoute:ActivatedRoute,private appservice:AppService,private router:Router) { }
  secondForm:FormGroup;
  secondMaintain:boolean=false;
  changedName:any='';
  subject:any=[
    {'lId':'telugu','lidvalue':'telugu'},
    {'lId':'English','lidvalue':'English'},
    {'lId':'Kannada','lidvalue':'kannada'},
  ]
  ngOnInit() {
    console.log(this.firstVar);
    console.log(this.secondVar);   
    this.secondForm = this.fb.group({
      name:['',[Validators.required,Validators.minLength(6)]],
      section:['',[Validators.required,Validators.maxLength(8)]],
      subjectName:['',Validators.required]
    })
    this.secondForm.controls.name.valueChanges.subscribe((item)=>{
      this.changedName = item;
      console.log(item);
    })
    // this.activatedRoute.params.subscribe(item=>{
    //   console.log(item.id)     
    // })
  }
  subjectSelcted(event){
    console.log(event); 
  }
  secondFormSubmitted(){
    this.secondMaintain = true;
    if(this.secondForm.valid){
      console.log(this.secondForm.value);
    }
    else{
      // console.log(this.secondForm.controls.name.errors);
      console.log(this.secondForm);
      this.secondForm.controls;
      for(var i in this.secondForm.controls){
        console.log('from else block');
        console.log(this.secondForm.controls[i].value);
      }
    }
  }
  setDefaultValue(){
    this.sdata.emit('charan is emmitted')
    this.secondForm.setValue({
      name:'charasn',
      section:''
    })
  }
  getCountries(){
    forkJoin(this.appservice.getCountryNames(),this.appservice.getCountries()).pipe(
      map((data)=>{
        console.log(data);
      })
    )
  }
  navigateToChild(){
    this.router.navigateByUrl('second/child1');
  }
}