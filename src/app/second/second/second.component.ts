import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { AppService } from 'src/app/app.service';
import {map, mergeMap, switchMap} from 'rxjs/operators';
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
  constructor(private fb:FormBuilder,private activatedRoute:ActivatedRoute,private appservice:AppService,private router:Router) { 
  }
  secondForm:FormGroup;
  secondMaintain:boolean=false;
  changedName:any='';
  subject:any=[
    {'lId':'telugu','lidvalue':'telugu'},
    {'lId':'English','lidvalue':'English'},
    {'lId':'Kannada','lidvalue':'kannada'},
  ]
  ngOnInit() {
    this.activatedRoute.params.subscribe(item=>{
      console.log(item.id);
    })
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
  name:any='';
  getCountries(){
    this.appservice.allowToFirst = true;
    forkJoin(this.appservice.getCountryNames(),this.appservice.getCountries()).subscribe(item=>{
      console.log(item);
    })
    console.log("forkjoin is completed");
    
    //below is working 5n
    // this.appservice.getCountries().pipe(map(names=>{
    //     let name=names[0].name
    //     return name
    // })).subscribe(name=>console.log(name));
    this.appservice.getCountries().pipe(map(names=>{
          this.name=names[0].name
          mergeMap(()=>this.appservice.getCountryNames())
      })).subscribe(item=>{
        console.log(item)
      });
    // switchMap(
    //   (event)=>{
    //     return this.appservice.getCountryNames()
    //   }
    // ).subscribe(item=>{
    //   console.log(item);      
    // })
  }
  navigateToChild(){
    this.router.navigateByUrl('second/child1');
  }
  navigateToChild1(){
    this.router.navigateByUrl('second/abc/child');
  }
}