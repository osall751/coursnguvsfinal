import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RendezVous } from '../entites/RendezVous';
import { RendezVousService } from '../services/RendezVous.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-rendezVous',
  templateUrl: './rendezVous.component.html',
  styleUrls: ['./rendezVous.component.css'],
})
export class RendezVousComponent implements OnInit {
  nomUtilisateur: string | null = '';
  nombre = 0;
  closeResult = '';
  rv = new RendezVous(
    new Date().getTime() * Math.floor(Math.random() * 1000),
    'Dolor aliquip pariatur minim ad magna aliqua ullamco enim est ut ad commodo irure et. Sit voluptate est id proident in do dolor qui nostrud ullamco aute. Officia veniam consectetur proident officia ea velit consequat cupidatat. Duis id ullamco exercitation est nisi mollit. Aliqua eiusmod occaecat est anim mollit quis nostrud quis aliquip exercitation adipisicing deserunt eu laborum. Tempor ipsum ut nostrud veniam proident. Eu duis ad eu commodo ad in aliqua enim.',
    '774 Danny Curve',
    new Date()
  );

  constructor(
    private route: Router,
    private _serviceRV: RendezVousService,
    private modalService: NgbModal
  ) { }

  public get serviceRV(): RendezVousService {
    return this._serviceRV;
  }

  ngOnInit() {
    if (sessionStorage.getItem('userName') != null) {
      this.nomUtilisateur = sessionStorage.getItem('userName');
    } else {
      this.route.navigateByUrl('/');
      alert("Il faut vous loguer d'abord !!!");
    }
  }

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
          console.log(this.rv);
          this.serviceRV.createRV(this.rv);
          this.rv = new RendezVous(
            new Date().getTime() * Math.floor(Math.random() * 1000),
            'Dolor aliquip pariatur minim ad magna aliqua ullamco enim est ut ad commodo irure et. Sit voluptate est id proident in do dolor qui nostrud ullamco aute. Officia veniam consectetur proident officia ea velit consequat cupidatat. Duis id ullamco exercitation est nisi mollit. Aliqua eiusmod occaecat est anim mollit quis nostrud quis aliquip exercitation adipisicing deserunt eu laborum. Tempor ipsum ut nostrud veniam proident. Eu duis ad eu commodo ad in aliqua enim.',
            '774 Danny Curve',
            new Date()
          );
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  edit(content: any, rvEdit: RendezVous) {
    this.rv = rvEdit;
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
          console.log(this.rv);
          this.serviceRV.editerRV(this.rv);
          this.rv = new RendezVous(
            new Date().getTime() * Math.floor(Math.random() * 1000),
            'Dolor aliquip pariatur minim ad magna aliqua ullamco enim est ut ad commodo irure et. Sit voluptate est id proident in do dolor qui nostrud ullamco aute. Officia veniam consectetur proident officia ea velit consequat cupidatat. Duis id ullamco exercitation est nisi mollit. Aliqua eiusmod occaecat est anim mollit quis nostrud quis aliquip exercitation adipisicing deserunt eu laborum. Tempor ipsum ut nostrud veniam proident. Eu duis ad eu commodo ad in aliqua enim.',
            '774 Danny Curve',
            new Date()
          );
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
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
}
