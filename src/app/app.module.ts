import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FormsModule } from '@angular/forms';
import { RendezVousComponent } from './rendezVous/rendezVous.component';
import { RendezVousService } from './services/RendezVous.service';
import { DicoPipe } from './pipes/dico.pipe';

@NgModule({
  declarations: [
    AppComponent,
      AccueilComponent,
      RendezVousComponent,
      DicoPipe
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [RendezVousService],
  bootstrap: [AppComponent]
})
export class AppModule { }
