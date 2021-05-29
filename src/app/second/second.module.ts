import { NgModule } from '@angular/core';
import { Child2Component } from './child2/child2/child2.component';
import { SecondComponent } from './second/second.component';
import { SecondWrapperModule } from './second-wrapper.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    Child2Component,
    SecondComponent
  ],
  imports: [
    CommonModule,SecondWrapperModule,FormsModule,ReactiveFormsModule,RouterModule
  ]
})
export class SecondModule { }
