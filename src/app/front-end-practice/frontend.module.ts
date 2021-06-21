import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTML5Component } from './HTML5/html5.component';
import { FrontEndRoutingModule } from './frontend.routing.module';
import { FrontEndComponent } from './frontend.component';
import { JavaScriptComponent } from './Javascript/javascript.component';



@NgModule({
  declarations: [
    HTML5Component,FrontEndComponent,JavaScriptComponent
  ],
  imports: [
    CommonModule,FrontEndRoutingModule
  ]
})
export class FrontEndModule { }
