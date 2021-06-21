import { Component, OnInit } from "@angular/core";
import { from, of } from "rxjs";

@Component({
    selector:"app-Observable",
    templateUrl:"./observable.component.html"
})

export class ObservableComponent implements OnInit{
    ngOnInit(){
        this.executeObservableMethod();
    }
    executeObservableMethod() {
        from(this.source).subscribe(item=>console.log(item));
        console.log("from completed");
        of(this.source).subscribe(item=>console.log(item));
        console.log("individual observable");
        of(12,23,4,324,23,).subscribe(item=>console.log(item));
        
    }
    constructor(){}
    source:any=["charan","1202","Infosys","IBM"];
}