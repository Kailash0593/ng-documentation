import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as _ from 'lodash';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  urlSegments;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(x => x instanceof NavigationEnd)
    ).subscribe((value: NavigationEnd) => {
      const segmentStack: Array<string> = [];
      this.urlSegments = _(value.urlAfterRedirects).split("/").filter((segment) => segment!=="").map((segment) => {
        segmentStack.push(segment);
        const segmentRoute = `/${segmentStack.join("/")}`;
        const segmentLabel = segment.split("-").map((subSegment) => _.startCase(subSegment)).join(" ");
        return {
          route: segmentRoute, 
          label: segmentLabel
        }
      }).value();
    })
  }

  ngOnInit(): void {
    
  }

}
