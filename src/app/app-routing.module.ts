import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardComponent } from "./auth.guards";
import { FirstComponent } from "./first/first/first.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ThirdComponent } from "./third/third/third.component";

const routes:Routes=[
    {
        path: 'first/:id1',
        component:FirstComponent
    },
    {
        path:'second',
        loadChildren:()=> import( './second/second.module').then(m=>m.SecondModule)
    },
    {
        path:'third',
        canActivate:[AuthGuardComponent],
        component:ThirdComponent
    },
    {
        path:'bus',
        loadChildren:()=>import('./bus-app/bus.module').then(b=>b.BusModule)
    },
    {
        path:'bootstrap',
        loadChildren:()=>import('./bootstrap-practice/bootstrap.module').then(bs=>bs.BootstrapCssModule)
    },
    {
        path:'front-end',
        loadChildren:()=>import('./front-end-practice/frontend.module').then(fem=>fem.FrontEndModule)
    },
    {
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