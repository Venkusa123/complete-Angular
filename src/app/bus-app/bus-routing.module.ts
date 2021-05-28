import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BusComponent } from "./bus.component";
import { BusRegistrationComponent } from "./registration/register.component";

export const busRoutes:Routes=[
 
    {
        path:'register',
        component:BusRegistrationComponent
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