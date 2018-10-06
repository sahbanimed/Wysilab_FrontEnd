import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/User';
import { UserService } from '../../Services/user.service';
import { ObjetService } from '../../Services/objet.service';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Objet } from '../../Models/Objet';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {

  //Declaration
  users: User[] = [];
  objets: Objet[] = [];
  page: number = 1;
  path: string[] = ['nom'];
  order: number = 1;
  
  constructor(private service: UserService,private modalService: NgbModal,private objetService: ObjetService) { }

  ngOnInit() {
    this.service.getAllUsers().subscribe(parametres => {
      this.users = parametres;
    });
  }

  //Open modal and display objects of one user
  openLg(content,id) {
    this.modalService.open(content, { size: 'lg' });
    this.objetService.getObjectsByUser(id).subscribe(parametres => {
      this.objets = parametres;
    });
  }

  //Sort by ordre alphabetically
  sortTable(prop: string) {
    this.path = prop.split('.')
    return false;
  }

  isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }

}
