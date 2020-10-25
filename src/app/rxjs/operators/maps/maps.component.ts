import { Component, OnInit } from '@angular/core';
import { RoutesService } from 'src/app/routes.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
  topics;

  constructor(
    private routesService: RoutesService
  ) { }

  ngOnInit(): void {
    this.topics = this.routesService.getTopicChildern("rxjs", 3, "maps");
  }

}
