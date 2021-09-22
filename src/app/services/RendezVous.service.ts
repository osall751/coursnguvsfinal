import { Injectable } from '@angular/core';
import { RendezVous } from '../entites/RendezVous';

@Injectable({
  providedIn: 'root'
})
export class RendezVousService {

  rvs = [
    new RendezVous(this.generationId(), "Cours Angular", "UVS", new Date("2022/05/15")),
    new RendezVous(this.generationId(), "Cours IONIC", "0859 Rita Path", new Date("06/25/2022")),
    new RendezVous(this.generationId(), "Cours PYTHON", "UIDT", new Date("07/06/2022")),
    new RendezVous(this.generationId(), "Cours Visite", "UASZ", new Date("05/15/2022")),
    new RendezVous(this.generationId(), "Cours Spring Boot", "USSEIN", new Date("05/05/2022")),
    new RendezVous(this.generationId(), "Cours Pen Test", "UAM", new Date("06/05/2022")),
    new RendezVous(this.generationId(), "Cours Ethycal Hacking", "UVS", new Date("05/05/2022")),
    new RendezVous(this.generationId(), "Cours Audit", "UIDT", new Date("08/05/2022")),
    new RendezVous(this.generationId(), "Cours Archi", "UGB", new Date("12/05/2022")),
    new RendezVous(this.generationId(), "Cours Dev Web", "SUPDECO", new Date("11/05/2022")),
    new RendezVous(this.generationId(), "Cours Santé Sport", "UVS", new Date("10/05/2022")),
  ]

  constructor() { }

  editerRV(rv: RendezVous) {
    for (let index = 0; index < this.rvs.length; index++) {
      if (this.rvs[index].id === rv.id) {
        this.rvs[index] = rv;
      }
    }
  } generationId() {
    return new Date().getTime() * Math.floor(Math.random() * 1000000);
  }
  createRV(newRv: RendezVous) {
    this.rvs = [newRv].concat(this.rvs);
  }
  supprimer(id: any) {
    var rep = confirm("Etes-vous sûr de vouloir supprimer cet élémént ?");
    if (rep) {
      this.rvs = this.rvs.filter(
        (varRv) => {
          return varRv.id != id;
        }
      );
    }
  }
}
