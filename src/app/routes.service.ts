import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';

export interface RouteInterface{
  route: string;
  label: string;
}

@Injectable({
  providedIn: 'root'
})

export class RoutesService {

  routesData: Array<{
    [key: string]: RouteInterface []
  }> = [];

  constructor(private router: Router){}

  getRoutes(routeName: string): void{
    const routeData: RouteInterface [] = [];
    const routeObj = {};
    const subjectRoutes = _(this.router.config).find((routes) => routes.path===routeName).children;
    const subjects = _(subjectRoutes).filter((routes) => routes.path!=="" ).value();  
    _(subjects).map((segment) => {
      const segmentLabel = segment.path.split("-").map((subSegment) => _.startCase(subSegment)).join(" ");
      routeData.push({
        route: `/${routeName}/${segment.path}`,
        label: segmentLabel
      });
    }).value();
    routeObj[routeName] = routeData;
    this.routesData.push(routeObj);
  }

  getTopics(){
    const config = this.router.config;
    return _(config).filter((topic) => {
      return topic.path!=="" && topic.path.split("/").length===1
    }).map((topic) => {
      const label = _(topic.path).split("-").map((segment) => _.startCase(segment)).join(" ");
      const route = `/${topic.path}`;
      return { label, route };
    }).value();
  }

  getTopicChildern(routeName: string, length: number){
    const config = this.router.config;
    const children = _(config).find({
      path: routeName
    }).children;
      
    return _(children).filter((topic) => {
      return topic.path!=="" && topic.path.split("/").length===length;
    }).map((topic) => {
      const currentTopic = _(topic.path).split("/").get(length!==0 ? length-1 : 0);
      const label = currentTopic.split("-").map((segment) => _.startCase(segment)).join(" ");
      const route = `/${routeName}/${topic.path}`;
      return { label, route };
    }).value();
  }
}
