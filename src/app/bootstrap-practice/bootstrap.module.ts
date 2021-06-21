import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BootstrapCssComponent } from "./bootstrap.component";
import { BootstrapRoutingModule } from "./bootstrap.routing.module";

@NgModule({
    imports:[CommonModule,BootstrapRoutingModule],
    declarations:[BootstrapCssComponent],
})

export class BootstrapCssModule{}
