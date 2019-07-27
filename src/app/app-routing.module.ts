import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SpellsListComponent } from './components/spells/spells-list/spells-list.component';
import { PotionsListComponent } from './components/potions/potions-list/potions-list.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'spells', component: SpellsListComponent },
  { path: 'potions', component: PotionsListComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
