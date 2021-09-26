import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RendezVousApiService } from '../services/RendezVousApi.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  userName = "osall@univ-thies.sn";
  pwd = "passer123";
  constructor(private route: Router, private _rvApiService: RendezVousApiService) { }

  ngOnInit() {
  }

  public valider(loginForm: NgForm) {
    this.userName = loginForm.controls["email"].value;
    this.pwd = loginForm.controls["password"].value;
    this._rvApiService.authentification(this.userName, this.pwd);
  }
}
