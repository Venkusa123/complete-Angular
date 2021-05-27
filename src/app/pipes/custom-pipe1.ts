import { ElementRef, Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'uppercasepipe',
    pure:false
})


export class UppercasePipe implements PipeTransform{
    transform(value:any,value2:any,value3:any,value4:any){
        return `${value.toUpperCase()} and value 1 is ${value2} and value 3 is ${value3} and value 4 is ${value4}`;
    }
}