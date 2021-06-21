import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FrontEndComponent } from "./frontend.component";
import { HTML5Component } from "./HTML5/html5.component";

const routes:Routes=[
    {
    path:'',
    component:FrontEndComponent,
    children:[{
            path:'html5',
            component:HTML5Component
            }
        ]
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class FrontEndRoutingModule{}