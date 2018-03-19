import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'servers-list',
  templateUrl: './servers-list.component.html',
  // styleUrls: ['./servers.component.css']
})
export class ServersListComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}


}