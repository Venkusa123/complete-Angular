import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ImpurePipeComponent } from "../pipes/custom-pipe2";
import { BusRoutingModule } from "./bus-routing.module";
import { BusComponent } from "./bus.component";
import { BusLoginComponent } from "./login/login.component";
import { LoginService } from "./login/login.service";
import { BusRegistrationComponent } from "./registration/register.component";

@NgModule({
    imports:[CommonModule,BusRoutingModule,FormsModule,ReactiveFormsModule],
    declarations:[BusComponent,BusRegistrationComponent,ImpurePipeComponent,BusLoginComponent],
    providers:[ImpurePipeComponent,LoginService]
})

export class BusModule{}