import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component'
import { GlobalErrorComponent } from './components/global-error/global-error.component'
import { FilterBreweriesPipe } from '../app/pipes/filter-products.pipe'
import { BreweryPageComponent } from './pages/brewery-page/brewery-page.component'
import { AboutPageComponent } from './pages/about-page/about-page.component'
import { NavigationComponent } from './components/navigation/navigation.component'


@NgModule({
  declarations: [
    AppComponent,
    GlobalErrorComponent,
    FilterBreweriesPipe,
    BreweryPageComponent,
    AboutPageComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
