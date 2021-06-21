import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BootstrapCssComponent } from "./bootstrap.component";

export const routes:Routes =[
{
    path:'',
    component:BootstrapCssComponent
}]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class BootstrapRoutingModule{}