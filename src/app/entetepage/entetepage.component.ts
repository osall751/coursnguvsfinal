import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entetepage',
  templateUrl: './entetepage.component.html',
  styleUrls: ['./entetepage.component.css']
})
export class EntetepageComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  deconnexion() {
    if (sessionStorage.getItem("userName") != null) {
      sessionStorage.removeItem("userName");
    }
    this.route.navigateByUrl("/");
  }
}
