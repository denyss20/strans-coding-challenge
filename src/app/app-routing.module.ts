import { NgModule } from "@angular/core"
import { BreweryPageComponent } from "./pages/brewery-page/brewery-page.component"
import { AboutPageComponent } from "./pages/about-page/about-page.component"
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: BreweryPageComponent},
  { path: 'about', component: AboutPageComponent},
  { path: 'About', redirectTo: 'about'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
