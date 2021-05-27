import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstComponent } from "./first/first/first.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ThirdComponent } from "./third/third/third.component";

const routes:Routes=[
    {
        path: 'first',
        component:FirstComponent
    },
    {
        path:'second',
        loadChildren:()=> import( './second/second.module').then(m=>m.SecondModule)
    },
    {
        path:'third',
        component:ThirdComponent
    },{
        path:'',
        redirectTo:'/first',
        pathMatch:'full'
    },{
        path:'**',
        component:NotFoundComponent
    }
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}