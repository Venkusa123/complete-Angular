import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from, of } from 'rxjs';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class FirstComponent implements OnInit {

  constructor(private appService:AppService,private acivatedRoute:ActivatedRoute) { }
   
  people=[{id:'1201',name:'charan',department:'IT'},
  {id:'1202',name:'chiyann',department:'IT'},
  {id:'1203',name:'Mahadevan',department:'IT'}];
  people1=[
  {id:'1201',name:'charan',department:'IT'},
  {id:'1202',name:'chiyann',department:'IT'},
  {id:'1203',name:'Mahadevan',department:'IT'},
  {id:'1204',name:'karthikeya',department:'IT'},
  {id:'1205',name:'kubera',department:'IT'},
  {id:'1201',name:'Veerabhadra',department:'IT'}
]
impArray:any=[];
  df:any=[]
  asd:any=["kira"];
  peopleResult:any;
  arraymain:any=[]
  ngOnInit() {
    // console.log(this.asd+"pichay");
    // this.peopleResult= this.people.reduce((acc,person)=>{
    //   this.arraymain.push(person.name)
    //   console.log(acc);
    //   return person.name;
    // },"");
    // this.peopleResult= this.people.reduce((acc,person)=>{
    //   this.arraymain.push(person.name)
    //   console.log([...acc,person.name]);
    //   console.log(acc);
    //   return [person.name]
    // },[]);
    // this.peopleResult= this.people.reduce((acc,person)=>{

    //   console.log(acc);
    //   return {...acc,[person.id]:person}
    // },{});
    // console.log("from arraymain"+this.arraymain);
    console.log("initial people1");
    console.log(this.people1);
    
    
    console.log("from person result");
    console.log(this.peopleResult);
    this.acivatedRoute.params.subscribe((item)=>{
      console.log(item.id1);
      
    })
  }



  a=["charan",'how are you',123,678,'fifth element'];
  b={'id':12,'value':'charan'};
  name:any='charan'
filteredArray:any=[];
  method(){
    this.filteredArray = this.a.filter(item=>item==='how are you')
    console.log(this.filteredArray);
    
    from(this.a).subscribe(item=>{
     if(item === 'fifth element')
     console.log(item);
    }) 
  }
  getCountryByName():any{
    this.appService.getCountryNames().subscribe(item=>{
      console.log(item);
      
    })
  }
}
