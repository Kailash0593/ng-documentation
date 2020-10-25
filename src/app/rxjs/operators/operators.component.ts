import { Component, OnInit } from '@angular/core';
import { RoutesService } from 'src/app/routes.service';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit {
  topics;

  constructor(
    private routesService: RoutesService
  ) { }

  ngOnInit(): void {
    this.topics = this.routesService.getTopicChildern("rxjs", 2, "operators");
  }

}
