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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


// models
import {User} from './models/user';

//composants
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
import { UsersComponent } from './composants/composants/users/users.component';
import { CreateUserComponent } from './composants/composants/users/create-user/create-user.component';

import { UserListComponent } from './composants/composants/users/user-list/user-list.component';
import { EditUserComponent } from './composants/composants/users/edit-user/edit-user.component';
import { DetailsUserComponent } from './composants/composants/users/details-user/details-user.component';
import { HeaderDashboardComponent } from './composants/page-dashboard/header-dashboard/header-dashboard.component';
import { DepotDashboardComponent } from './composants/page-dashboard/depot-dashboard/depot-dashboard.component';
import { ProduitDashboardComponent } from './composants/page-dashboard/produit-dashboard/produit-dashboard.component';
import { StockDashboardComponent } from './composants/page-dashboard/stock-dashboard/stock-dashboard.component';
import { EntreeDashboardComponent } from './composants/page-dashboard/entree-dashboard/entree-dashboard.component';
import { SortieDashboardComponent } from './composants/page-dashboard/sortie-dashboard/sortie-dashboard.component';
import { InventaireDashboardComponent } from './composants/page-dashboard/inventaire-dashboard/inventaire-dashboard.component';
import { GlobalDashboardComponent } from './composants/page-dashboard/global-dashboard/global-dashboard.component';

// services
import {UserService } from './services/users/users.service';
import { DeleteUserComponent } from './composants/composants/users/delete-user/delete-user.component';





@NgModule({
  declarations: [ // --------------------------vos composants
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
    InventairesComponent,
    UsersComponent,
    CreateUserComponent,
    UserListComponent,
    EditUserComponent,
    DetailsUserComponent,
    HeaderDashboardComponent,
    DepotDashboardComponent,
    ProduitDashboardComponent,
    StockDashboardComponent,
    EntreeDashboardComponent,
    SortieDashboardComponent,
    InventaireDashboardComponent,
    GlobalDashboardComponent,
    DeleteUserComponent
  ],
  imports: [     // --------------------------vos imports
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
     
  ],
  providers: [   // --------------------------vos providers ou fournisseurs
       UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
