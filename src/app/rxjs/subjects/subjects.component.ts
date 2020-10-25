import { Component, OnInit } from '@angular/core';
import { RoutesService } from 'src/app/routes.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {
  topics;
  
  constructor(
    private routesService: RoutesService
  ) { }

  ngOnInit(): void {
    this.topics = this.routesService.getTopicChildern("rxjs", 2, "subjects");
  }

}
