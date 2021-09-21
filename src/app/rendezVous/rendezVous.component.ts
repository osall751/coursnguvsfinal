import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RendezVous } from '../entites/RendezVous';
import { RendezVousService } from '../services/RendezVous.service';

@Component({
  selector: 'app-rendezVous',
  templateUrl: './rendezVous.component.html',
  styleUrls: ['./rendezVous.component.css']
})
export class RendezVousComponent implements OnInit {
  nomUtilisateur: string | null = "";
  nombre = 0;
  // rvs = [
  //   new RendezVous(1, "Cours Angular", "UVS", new Date("05/15/2022")),
  //   new RendezVous(2, "Cours IONIC", "UGB", new Date("06/25/2022")),
  //   new RendezVous(3, "Cours PYTHON", "UIDT", new Date("07/06/2022")),
  //   new RendezVous(4, "Cours Visite", "UASZ", new Date("05/15/2022")),
  //   new RendezVous(5, "Cours Spring Boot", "USSEIN", new Date("05/05/2022")),
  //   new RendezVous(6, "Cours Pen Test", "UAM", new Date("06/05/2022")),
  //   new RendezVous(7, "Cours Ethycal Hacking", "UVS", new Date("05/05/2022")),
  //   new RendezVous(8, "Cours Audit", "UIDT", new Date("08/05/2022")),
  //   new RendezVous(9, "Cours Archi", "UGB", new Date("12/05/2022")),
  //   new RendezVous(10, "Cours Dev Web", "SUPDECO", new Date("11/05/2022")),
  //   new RendezVous(11, "Cours Santé Sport", "UVS", new Date("10/05/2022")),
  // ]
  constructor(private routeActive: ActivatedRoute, private _serviceRV:RendezVousService) { }

  public get serviceRV() : RendezVousService {
    return this._serviceRV;
  }

  ngOnInit() {
    this.nomUtilisateur = this.routeActive.snapshot.paramMap.get("username");
  }

  // supprimer(id: any) {
  //   this.rvs = this.rvs.filter(
  //     (varRv) => {
  //       return varRv.id != id;
  //     }
  //   );
  // }
}
