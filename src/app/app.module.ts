import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComposantsComponent } from './composants/composants.component';
import { ServicesComponent } from './services/services.component';
import { PagesComponent } from './composants/pages/pages.component';
import { PageInscriptionComponent } from './composants/pages/page-inscription/page-inscription.component';
import { PageLoginComponent } from './composants/pages/page-login/page-login.component';
import { MaterialModule } from './material.model';

import { SidebarComponent } from './composants/sidebar/sidebar.component';
import { HeaderComponent } from './composants/header/header.component';
import { FooterComponent } from './composants/footer/footer.component';
import { PageDashboardComponent } from './composants/page-dashboard/page-dashboard.component';
import { DepotsComponent } from './composants/depots/depots.component';
import { ProduitsComponent } from './composants/produits/produits.component';
import { StocksComponent } from './composants/stocks/stocks.component';
import { EntreesComponent } from './composants/entrees/entrees.component';
import { SortiesComponent } from './composants/sorties/sorties.component';
import { InventairesComponent } from './composants/inventaires/inventaires.component';

@NgModule({
  declarations: [
    AppComponent,
    ComposantsComponent,
    ServicesComponent,
    PagesComponent,
    PageInscriptionComponent,
    PageLoginComponent,
  PageDashboardComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    DepotsComponent,
    ProduitsComponent,
    StocksComponent,
    EntreesComponent,
    SortiesComponent,
    InventairesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
