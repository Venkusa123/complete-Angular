import { Directive, ElementRef, HostListener, OnInit } from "@angular/core";

@Directive({
    selector:'[directive1]'
})


export class Directive1 implements OnInit{
    ngOnInit(){}
    constructor(private el:ElementRef){}
    @HostListener('mouseout') mouseOver(){
        this.el.nativeElement.style.backgroundColor='red';
    }
    @HostListener('mouseenter') mouseIn(){
        this.el.nativeElement.style.backgroundColor='yellow';
    }
}