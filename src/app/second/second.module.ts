import { NgModule } from '@angular/core';
import { Child2Component } from './child2/child2/child2.component';
import { SecondComponent } from './second/second.component';
import { SecondWrapperModule } from './second-wrapper.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    Child2Component,
    SecondComponent
  ],
  imports: [
    CommonModule,SecondWrapperModule,FormsModule,ReactiveFormsModule
  ]
})
export class SecondModule { }
