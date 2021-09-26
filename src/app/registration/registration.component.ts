import { Component, OnInit } from '@angular/core';
import { Utilisateurs } from '../entites/Utilisateurs';
import { RendezVousApiService } from '../services/RendezVousApi.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user = new Utilisateurs();

  constructor(private _rvApiService: RendezVousApiService) { }


  public get rvApiService() {
    return this._rvApiService;
  }

  ngOnInit() {
  }
}
