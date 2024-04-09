import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { SmallDogsComponent } from "./small-dogs/small-dogs.component";
import { LargeDogsComponent } from "./large-dogs/large-dogs.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/small', pathMatch: 'full' },
    { path: 'small', component: SmallDogsComponent },
    { path: 'large', component: LargeDogsComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
    
}