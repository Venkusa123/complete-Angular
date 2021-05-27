import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ThirdService } from './third.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent implements OnInit {
  array=[13,14,1,5,16,17];
  storeArray:any=[];
  constructor(private thirdService:ThirdService) { }
  templateFormSubmitted:boolean=false;
  newarray=[];
  numbers = [-5, 6, 2, 0,];
  doubledPositiveNumbers:any=[];
  ngOnInit() {
    this.doubledPositiveNumbers = this.numbers.reduce((accumulator, currentValue) => {
      if (currentValue > 0) {
        const doubled = currentValue * 2;
        accumulator.push(doubled);
      }
      return accumulator;
    }, []);
 
    
    console.log(this.doubledPositiveNumbers);

  this.storeArray = this.array.reduce((acc1,item,index)=>{
          if(item>10){
            {acc1[item]=item};
          }
        return acc1; 
      },{});
    console.log(this.storeArray);
  } 
  registered(f1:NgForm){
    this.templateFormSubmitted=true;
    console.log(f1);
  }
  countryName:any="";
  getCountries(){
    this.thirdService.getCountries().subscribe((item)=>{
      console.log(item[1].name);
      this.countryName = item[1].name;
    },(err)=>{
      console.log(err);      
    })
  }
  fil1:any=["charan","Hani","Mani","Kani","Palani"];
  storeFil1:any=[];
  getFilter(){
    this.storeFil1=this.fil1.filter((item,index,arr)=>{
      if(item.length>5){
        return item
      }
    })
    console.log(this.storeFil1);
  }
  arr12:any=["charan","Acuhta","krishna","Madhava","Madhusudhana","Hari","Govinda"]
  reducedAr:any=[];
  reducedAr1:any=[];
  getReduceditems(){
    this.reducedAr = this.arr12.reduce((acc,item,i,array)=>{
      if(item.length>5)
      {
        // acc[index]=item
        acc.push({[i]:item})
      }
      return acc;
    },[{}])   
    console.log(this.reducedAr);
  } 
  h1b:any=[];
  getReduceditems1(){
  this.reducedAr1 = this.arr12.reduce((acc,item,index)=>{
      if(item.length>4){
       this.h1b.push(item)
      }
      return this.h1b
    })
    console.log(this.reducedAr1);   
  }
  reduced2:any=[];
  arr13:any=["charan","Acuhta","krishna","Madhava","Madhusudhana","Hari","Govinda"]
  arr14:any=[{id:"1201",name:"charan"},{id:"1202",name:"Mahadeva"},{id:"1203",name:"Manikarnika"}];
  k=new Map();
  getReduceditems2(){
    // this.arr14.reduce((acc,item)=>{
    //     this.k.set(item.id,item);
    // },"")
    console.log([...this.arr14.reduce((acc,item)=>acc.set(item.id,item),new Map()).values()]);
    // console.log([...this.k.values()]);
  }
  delReduceditems2(){
    this.k.delete("1201")
  }
  filetred(){
    this.arr14.filter(item=>{
     this.k.set(item.id,item);
    })
    console.log(this.k.values());
  }
}