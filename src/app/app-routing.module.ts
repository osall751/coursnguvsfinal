import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { RegistrationComponent } from './registration/registration.component';
import { RendezVousComponent } from './rendezVous/rendezVous.component';

const routes: Routes = [
  {path:'', component:AccueilComponent},
  {path:'rvs', component:RendezVousComponent},
  {path:'registration', component:RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
