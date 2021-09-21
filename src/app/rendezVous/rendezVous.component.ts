import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rendezVous',
  templateUrl: './rendezVous.component.html',
  styleUrls: ['./rendezVous.component.css']
})
export class RendezVousComponent implements OnInit {
  nomUtilisateur: string | null="";

  constructor(private routeActive: ActivatedRoute) { }

  ngOnInit() {
    this.nomUtilisateur=this.routeActive.snapshot.paramMap.get("username");
  }

}
