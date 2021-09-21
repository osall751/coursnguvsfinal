import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { RendezVousComponent } from './rendezVous/rendezVous.component';

const routes: Routes = [
  {path:'', component:AccueilComponent},
  {path:'rvs/:username', component:RendezVousComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
