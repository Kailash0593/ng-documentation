import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesService } from './../routes.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {
  topics;
  constructor(
    private routesService: RoutesService
  ) {
    
  }

  ngOnInit(): void {
    this.topics = this.routesService.getTopics();
  }

}
