import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  /**
   * valider
   */
  public valider() {
    if (this.userName === "osall@univ-thies.sn") {
      alert("Login et mdp saisies OK !!!")
    } else {
      alert("Login et mdp saisies KO !!!");
    }
  }
}

function add(a: number, b: string) {
  return a + b;
};
