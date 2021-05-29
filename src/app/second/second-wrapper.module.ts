import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardComponent } from "../auth.guards";
import { Child2Component } from "./child2/child2/child2.component";
import { SecondComponent } from "./second/second.component";

const approutes:Routes=[
   {
        path:'abc',
        component:SecondComponent,
        canActivateChild:[AuthGuardComponent],
                children:[{
                    path:'child',
                    component:Child2Component                    
                }]
    },
    {
        path:'child1',
        component:Child2Component
    },
    {
        path:'',
        component:SecondComponent
    },
]

@NgModule({
    imports:[RouterModule.forChild(approutes)],
    exports:[RouterModule]
})

export class SecondWrapperModule{}

// ,
//         children:[{
//             path:'',
//             component:Child2Component
//         }]