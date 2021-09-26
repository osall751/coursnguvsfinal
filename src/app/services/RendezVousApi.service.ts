import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RendezVous } from '../entites/RendezVous';
import { Utilisateurs } from '../entites/Utilisateurs';
import axios from 'axios';
@Injectable({
  providedIn: 'root',
})
export class RendezVousApiService {
  urlApi = environment.urlApi;
  httpOtions = {
    headers: new HttpHeaders({
      "content-type": "application/json",
      Authorization: 'Bearer ' + environment.jwtBearerToken,
    })
  }
  rvs: any = [];

  constructor(private http: HttpClient) {
    console.log(environment.jwtBearerToken);
  }
  getAllRvs() {
    this.http.get(this.urlApi + "rvs").subscribe((data: {}) => {
      this.rvs = data;
    });
  }

  ajouterRV(rv: RendezVous) {
    return this.http.post(this.urlApi + "rvs", { description: rv.description, lieu: rv.lieu, date: rv.date },
      this.httpOtions).subscribe((data: {}) => {
        this.getAllRvs();
      });
  }

  supprimerRV(id: any) {
    if (window.confirm("Voulez-vous surpprimer cet élément ?")) {
      this.http.delete(this.urlApi + "rvs/" + id, this.httpOtions)
        .subscribe((data: {}) => {
          this.getAllRvs();
        });
    }
  }

  updateRV(rv: RendezVous) {
    if (window.confirm("Voulez-vous mettre à jour cet élément ?")) {
      this.http.put(this.urlApi + "rvs/" + rv.id, {
        description: rv.description,
        lieu: rv.lieu,
        date: rv.date
      }, this.httpOtions).subscribe((data: {}) => {
        this.getAllRvs();
      });
    } else
      location.reload();
  }

  ajouterNewUser(user: Utilisateurs) {
    return this.http.post(this.urlApi + "users", {
      "username": user.username,
      "email": user.email,
      "password": user.password,
      "confirmed": true,
      "blocked": false,
      "role": 1
    }).subscribe((data: {}) => {
      alert("Utilisateur crée avec succés !!!");
      location.assign("/");
    }, (error) => {
      alert("Erreur de création de l'Utilisateur " + error.message);
    });
  }

  authentification(userName: string, pwd: string) {
    return this.http.post(this.urlApi + "auth/local", {
      "identifier": userName,
      "password": pwd
    }).subscribe((data: any) => {
      console.log(data);
      environment.jwtBearerToken = data.jwt;
      sessionStorage.setItem("userName", data.user.username + " " + data.user.email);
      location.assign("rvs");
    }, (error) => {
      alert("Erreur de création de l'Utilisateur " + error.message);
    });
  }

}
