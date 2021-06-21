import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BusComponent } from "./bus.component";
import { BusLoginComponent } from "./login/login.component";
import { BusRegistrationComponent } from "./registration/register.component";

export const busRoutes:Routes=[
 
    {
        path:'register',
        component:BusRegistrationComponent
    },
    {
        path:'bus',
        children:[{
            path:"login",
            component:BusLoginComponent
        }]
    },
    {
        path:"",
        component:BusComponent,
        children:[{
            path:'register1',
            component:BusRegistrationComponent
        }]
    }
]
@NgModule({
    imports:[RouterModule.forChild(busRoutes)],
    exports:[RouterModule]
})
export class BusRoutingModule{}