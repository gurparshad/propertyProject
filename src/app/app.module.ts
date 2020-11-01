import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {HttpClientModule} from '@angular/common/http';
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { PageNotFoundComponent } from './PageNotFound/PageNotFound.component';
import {FormsModule} from '@angular/forms';

const appRoutes: Routes = [
  {path: '', component: PropertyListComponent},
  {path: 'rent-property', component: PropertyListComponent},
  {path: 'add-property', component: AddPropertyComponent},
  {path: 'property-detail/:propertyId', component: PropertyDetailComponent},
  {path: '**', component: PageNotFoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
      NavBarComponent,
      AddPropertyComponent,
      PropertyDetailComponent,
      PageNotFoundComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    HousingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

