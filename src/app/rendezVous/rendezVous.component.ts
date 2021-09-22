import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RendezVous } from '../entites/RendezVous';
import { RendezVousService } from '../services/RendezVous.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rendezVous',
  templateUrl: './rendezVous.component.html',
  styleUrls: ['./rendezVous.component.css']
})
export class RendezVousComponent implements OnInit {
  nomUtilisateur: string | null = "";
  nombre = 0;
  closeResult = '';
  rv=new RendezVous(new Date().getTime()*Math.floor(Math.random()*1000),"Dolor aliquip pariatur minim ad magna aliqua ullamco enim est ut ad commodo irure et. Sit voluptate est id proident in do dolor qui nostrud ullamco aute. Officia veniam consectetur proident officia ea velit consequat cupidatat. Duis id ullamco exercitation est nisi mollit. Aliqua eiusmod occaecat est anim mollit quis nostrud quis aliquip exercitation adipisicing deserunt eu laborum. Tempor ipsum ut nostrud veniam proident. Eu duis ad eu commodo ad in aliqua enim.","774 Danny Curve",new Date());
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
  constructor(private route: Router, private _serviceRV: RendezVousService, private modalService: NgbModal) { }

  public get serviceRV(): RendezVousService {
    return this._serviceRV;
  }

  ngOnInit() {
    // this.nomUtilisateur = this.routeActive.snapshot.paramMap.get("username");
    if (sessionStorage.getItem("userName") != null) {
      this.nomUtilisateur = sessionStorage.getItem("userName");
    }
    else {
      // alert("Il faut vous loguer d'abord !!!");
      this.route.navigateByUrl("/");
      alert("Il faut vous loguer d'abord !!!");
    }
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      console.log(this.rv);
      this.serviceRV.createRV(this.rv);
      this.rv=new RendezVous(new Date().getTime()*Math.floor(Math.random()*1000),"Dolor aliquip pariatur minim ad magna aliqua ullamco enim est ut ad commodo irure et. Sit voluptate est id proident in do dolor qui nostrud ullamco aute. Officia veniam consectetur proident officia ea velit consequat cupidatat. Duis id ullamco exercitation est nisi mollit. Aliqua eiusmod occaecat est anim mollit quis nostrud quis aliquip exercitation adipisicing deserunt eu laborum. Tempor ipsum ut nostrud veniam proident. Eu duis ad eu commodo ad in aliqua enim.","774 Danny Curve",new Date());

    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  edit(content:any, rv0:RendezVous) {
    this.rv=rv0;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      console.log(this.rv);
      // this.serviceRV.createRV(this.rv);
      this.rv=new RendezVous(new Date().getTime()*Math.floor(Math.random()*1000),"Dolor aliquip pariatur minim ad magna aliqua ullamco enim est ut ad commodo irure et. Sit voluptate est id proident in do dolor qui nostrud ullamco aute. Officia veniam consectetur proident officia ea velit consequat cupidatat. Duis id ullamco exercitation est nisi mollit. Aliqua eiusmod occaecat est anim mollit quis nostrud quis aliquip exercitation adipisicing deserunt eu laborum. Tempor ipsum ut nostrud veniam proident. Eu duis ad eu commodo ad in aliqua enim.","774 Danny Curve",new Date());

    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  // supprimer(id: any) {
  //   this.rvs = this.rvs.filter(
  //     (varRv) => {
  //       return varRv.id != id;
  //     }
  //   );
  // }
}
