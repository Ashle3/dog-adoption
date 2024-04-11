import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { SmallDogsComponent } from "./small-dogs/small-dogs.component";
import { LargeDogsComponent } from "./large-dogs/large-dogs.component";
import { SmallDogEditComponent } from "./small-dogs/small-dog-edit/small-dog-edit.component";
import { SmallDogDetailComponent } from "./small-dogs/small-dog-detail/small-dog-detail.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/small', pathMatch: 'full' },
    { path: 'small', component: SmallDogsComponent, children: [
        { path: 'new', component:  SmallDogEditComponent },
        { path: ':id', component: SmallDogDetailComponent },
        { path: ':id/edit', component: SmallDogEditComponent }
    ] },
    { path: 'large', component: LargeDogsComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
    
}