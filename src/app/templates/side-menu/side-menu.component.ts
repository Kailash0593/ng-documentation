import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbAccordionConfig, NgbPanelChangeEvent} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  providers: [NgbAccordionConfig]
})
export class SideMenuComponent implements OnInit {

  constructor(
    private router: Router,
    config: NgbAccordionConfig
  ) {
    config.closeOthers = true;
  }

  ngOnInit(): void {}

  public beforeChange($event: NgbPanelChangeEvent) {
    if ($event.panelId === 'preventchange-2') {
      $event.preventDefault();
    }
  }

}
