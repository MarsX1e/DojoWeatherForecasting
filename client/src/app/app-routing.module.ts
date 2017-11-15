import {NgModule} from "@angular/core";
import {Routes,RouterModule} from "@angular/router";
import { IndexComponent } from "./index/index.component";
import { SeattleComponent } from "./index/seattle/seattle.component";
const routes: Routes=[
    {
        path:":city",
        pathMatch:"full",
        component:SeattleComponent,
    },
    {
        path:"",
        pathMatch:"full",
        redirectTo:"Seattle",
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}