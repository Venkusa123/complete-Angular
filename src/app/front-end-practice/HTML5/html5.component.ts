import { Component, OnInit } from "@angular/core";

@Component({
    selector:"app-html5",
    templateUrl:'./html5.component.html',
    styleUrls:['./html5.component.scss']
})


export class HTML5Component implements OnInit{

    constructor(){}
    ngOnInit(){
        this.filtererdArr = this.arr.filter((item,index,arr1)=>arr1.indexOf(item)==index)
        console.log(this.filtererdArr);
    }
    arr=[5,43,5,6,7,8,8,9,9];
    arr1=[5,43,5,6,7,8,8,9,9];
    filtererdArr:any=[];
    filtererdArr1:any=[];
    clickMe(){
       this.filtererdArr1= this.arr1.reduce((acc,item,index,duparr)=>{
            if(duparr.indexOf(item)==index){
                acc.push(item)
            }
            return acc
        },[])
        console.log(this.filtererdArr1);
        
    }
}