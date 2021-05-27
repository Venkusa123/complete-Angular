import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Child2Component } from "./child2/child2/child2.component";
import { SecondComponent } from "./second/second.component";

const approutes:Routes=[
   {
        path:'',
        component:SecondComponent,
                children:[{
                    path:'child',
                    component:Child2Component
                }]
        
    },
    {
        path:'child1',
        component:Child2Component
    }
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