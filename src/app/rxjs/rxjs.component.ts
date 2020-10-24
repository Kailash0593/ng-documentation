import { Component, OnInit } from '@angular/core';
import { RoutesService } from '../routes.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {
  topics;

  constructor(
    private routesService: RoutesService
  ){}

  ngOnInit(): void {
    this.topics = this.routesService.getTopicChildern("rxjs", 1);
  }

}
