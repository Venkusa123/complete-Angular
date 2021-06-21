import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"custPipe2",
    pure:false
})


export class ImpurePipeComponent implements PipeTransform{
    counter:any = 0;
    arr = ["Armani","Arockia","Arudhra","Bhimavaram","Bivandi wadia","Chengalpatnam","Chennabasappa","chitti"];
    transform(value:any){
        this.counter = this.counter+1;
        // return `hi ${value} and counter is ${this.counter}`;
        return this.arr.filter(item=>item.includes(value));
    }
}