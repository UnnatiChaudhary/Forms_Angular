import { RouterModule, Routes } from "@angular/router";
import { AComponent } from "./core/a/a.component";
import { BComponent } from "./core/b/b.component";
import { CComponent } from "./core/b/c/c.component";
import { NgModule } from "@angular/core";
import { FirstComponent } from "./core/b/first/first.component";
import { SecondComponent } from "./core/b/second/second.component";
import { FourthComponent } from "./core/b/fourth/fourth.component";

const appRoutes: Routes=[
    {path:'A/:id',component:AComponent},
    {path:'B',component:BComponent,children:[
    {path:'first',component:FirstComponent},
    {path:'second',component:SecondComponent},
    {path:'fourth',component:FourthComponent},
    ]},
    {path:'C/:id',component:CComponent}
]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
export class route{

}