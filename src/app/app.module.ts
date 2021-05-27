import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first/first.component';
import { AppRoutingModule } from './app-routing.module';
import { ThirdComponent } from './third/third/third.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import {HttpClientModule} from '@angular/common/http'
import { AppService } from './app.service';
import { SecondModule } from './second/second.module';
import { UppercasePipe } from './pipes/custom-pipe1';
import { Directive1 } from './custome-directives/directive1';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ThirdComponent,
    NotFoundComponent,UppercasePipe,Directive1
  ],
  imports: [
    BrowserModule,AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule,SecondModule
  ],
  providers: [AppService,UppercasePipe,Directive1],
  bootstrap: [AppComponent]
})
export class AppModule { }