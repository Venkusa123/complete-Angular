import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BusRoutingModule } from "./bus-routing.module";
import { BusComponent } from "./bus.component";
import { BusRegistrationComponent } from "./registration/register.component";

@NgModule({
    imports:[CommonModule,BusRoutingModule,FormsModule,ReactiveFormsModule],
    declarations:[BusComponent,BusRegistrationComponent]
})

export class BusModule{}