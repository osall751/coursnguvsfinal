import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  userName = "osall@univ-thies.sn";
  pwd = "passer123";
  maDate = new Date();
  imgSrc = "https://images.seneweb.com/dynamic/modules/news/images/gen/fb/46037cd575b285de551947e6d16838e2fe35b146.jpg"

  constructor(private route: Router) { }

  ngOnInit() {
  }

  /**
   * valider
   */
  public valider() {
    if (this.userName.length>0) {
      // this.route.navigate(["rvs", this.userName]);
      sessionStorage.setItem("userName",this.userName);
      this.route.navigate(["rvs"]);
    } else {
      alert("Vérifier le login et le mot de passe saisies !!!");
    }
  }
}

function add(a: number, b: string) {
  return a + b;
};
