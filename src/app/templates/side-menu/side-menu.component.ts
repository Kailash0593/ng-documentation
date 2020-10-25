import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { RouteJson, routeJson } from './../../route-structure';
import * as _ from 'lodash';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  providers: [NgbAccordionConfig]
})
export class SideMenuComponent implements OnInit {
  isCollapsed = true;
  sideMenu: RouteJson [] = routeJson;
  constructor (
    config: NgbAccordionConfig
  ) {
    config.closeOthers = true;
  }

  ngOnInit(): void {
    console.log(routeJson)
  }


}
