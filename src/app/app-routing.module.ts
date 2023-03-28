import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageDashboardComponent } from './composants/page-dashboard/page-dashboard.component';
import { PageStatistiquesComponent } from './composants/pages/page-statistiques/page-statistiques.component';
import { PageInscriptionComponent } from './composants/pages/page-inscription/page-inscription.component';
import { PageLoginComponent } from './composants/pages/page-login/page-login.component';

import { DepotsComponent } from './composants/depots/depots.component';
import { ProduitsComponent } from './composants/produits/produits.component';
import { StocksComponent } from './composants/stocks/stocks.component';
import { EntreeComponent } from './composants/composants/entrees/entrees.component';

import { SortieComponent } from './composants/composants/sorties/sorties.component';
import { InventairesComponent } from './composants/inventaires/inventaires.component';
import { UsersComponent } from './composants/composants/users/users.component';
import { HeaderDashboardComponent } from './composants/page-dashboard/header-dashboard/header-dashboard.component';
import { UserListComponent } from './composants/composants/users/user-list/user-list.component';
import { EditUserComponent } from './composants/composants/users/edit-user/edit-user.component';
import { DeleteUserComponent } from './composants/composants/users/delete-user/delete-user.component';
import { CreateUserComponent } from './composants/composants/users/create-user/create-user.component';
import { EntreeListComponent } from './composants/composants/entrees/entrees-list/entrees-list.component';
import { CreateEntreeComponent } from './composants/composants/entrees/create-entrees/create-entrees.component';
import { DeleteEntreeComponent } from './composants/composants/entrees/delete-entrees/delete-entrees.component';
import { SortieListComponent } from './composants/composants/sorties/sortie-list/sortie-list.component';
import { CreateSortieComponent } from './composants/composants/sorties/create-sortie/create-sortie.component';
import { EditSortieComponent } from './composants/composants/sorties/edit-sortie/edit-sortie.component';
import { DeleteSortieComponent } from './composants/composants/sorties/delete-sortie/delete-sortie.component';
import { EditEntreeComponent } from './composants/composants/entrees/edit-entrees/edit-entrees.component';



const routes: Routes = [
  { path: "", component: PageLoginComponent },
  { path: "inscrire", component: PageInscriptionComponent },
  { path: "pageDashboard", component: PageDashboardComponent },
  { path: "app-header-dashboard", component: HeaderDashboardComponent },

  { path: "stat", component: PageStatistiquesComponent },

  { path: "app-dashboards", component: PageDashboardComponent },
  { path: "app-depots", component: DepotsComponent },
  { path: "app-produits", component: ProduitsComponent },
  { path: "app-stocks", component: StocksComponent },
  { path: "app-entrees", component: EntreeComponent },
  { path: "app-sorties", component: SortieComponent },
  { path: "app-inventaires", component: InventairesComponent },
  {
    path: "app-users", component: UsersComponent,
    children: [

      {
        path: '',
        component: UserListComponent,
      },
      {
        path: 'create-user',
        component: CreateUserComponent,
      },
      {
        path: 'edit-user/:id',
        component: EditUserComponent,
      },
      {
        path: 'delete-user/:id',
        component: DeleteUserComponent,
      }
    ]
  },


  {
    path: "app-entrees", component: EntreeComponent,
    children: [

      {
        path: '',
        component: EntreeListComponent,
      },
      {
        path: 'create-entrees', /* à compléter */
        component: CreateEntreeComponent,
      },
      {
        path: 'edit-entrees/:id', /* à compléter */
        component: EditEntreeComponent,
      },
      {
        path: 'delete-entrees/:id',
        component: DeleteEntreeComponent,
      }
    ]
  },


  {
    path: "app-sorties", component: SortieComponent,
    children: [

      {
        path: '',
        component: SortieListComponent,
      },
      {
        path: '...?', /* à compléter */
        component: CreateSortieComponent,
      },
      {
        path: '...?', /* à compléter */
        component: EditSortieComponent,
      },
      {
        path: '...?', /* à compléter */
        component: DeleteSortieComponent,
      }
    ]
  }

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
