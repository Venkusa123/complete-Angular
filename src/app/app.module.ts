import { BrowserModule } from '@angular/platform-browser';
import { NgModule,APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first/first.component';
import { AppRoutingModule } from './app-routing.module';
import { ThirdComponent } from './third/third/third.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppService } from './app.service';
import { SecondModule } from './second/second.module';
import { UppercasePipe } from './pipes/custom-pipe1';
import { Directive1 } from './custome-directives/directive1';
import { ThirdService } from './third/third/third.service';
import { BusModule } from './bus-app/bus.module';
import { LoadingInterceptorService } from './loading.interceptor';
import { RouterModule } from '@angular/router';
import { AuthGuardComponent } from './auth.guards';
import { ObservableComponent } from './observable-comp/observable.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ThirdComponent,
    NotFoundComponent,UppercasePipe,Directive1,ObservableComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule,SecondModule,BusModule,RouterModule
  ],
  providers: [AppService,UppercasePipe,Directive1,ThirdService,AuthGuardComponent,
  // {provide: HTTP_INTERCEPTORS,useClass: LoadingInterceptorService,multi: true}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
