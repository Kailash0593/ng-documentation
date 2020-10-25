import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { routeJson } from './../route-structure';
import { RxjsComponent } from './rxjs.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { AsyncSubjectComponent } from './subjects/async-subject/async-subject.component';
import { BehaviorSubjectComponent } from './subjects/behavior-subject/behavior-subject.component';
import { RxjsOutletComponent } from './rxjs-outlet/rxjs-outlet.component';
import { ReplaySubjectComponent } from './subjects/replay-subject/replay-subject.component';
import { SubjectComponent } from './subjects/subject/subject.component';
import { OperatorsComponent } from './operators/operators.component';
import { MapsComponent } from './operators/maps/maps.component';
import { MergeMapComponent } from './operators/maps/merge-map/merge-map.component';
import { SwitchMapComponent } from './operators/maps/switch-map/switch-map.component';
import { DebounceComponent } from './operators/debounce/debounce.component';

const routes: Routes = [
  {
    path: routeJson[0].path,
    component: RxjsOutletComponent,
    children: [
      {
        path: '',
        component: RxjsComponent
      },
      {
        path: routeJson[0].children[0].path,
        component: SubjectsComponent
      },
      {
        path: routeJson[0].children[0].children[0].path,
        component: SubjectComponent
      },
      {
        path: routeJson[0].children[0].children[1].path,
        component: BehaviorSubjectComponent
      },
      {
        path: routeJson[0].children[0].children[2].path,
        component: ReplaySubjectComponent
      },
      {
        path: routeJson[0].children[0].children[3].path,
        component: AsyncSubjectComponent
      },
      {
        path: routeJson[0].children[1].path,
        component: OperatorsComponent
      },
      {
        path: routeJson[0].children[1].children[0].path,
        component: MapsComponent
      },
      {
        path: routeJson[0].children[1].children[0].children[0].path,
        component: MergeMapComponent
      },
      {
        path: routeJson[0].children[1].children[0].children[1].path,
        component: SwitchMapComponent
      },
      {
        path: routeJson[0].children[1].children[1].path,
        component: DebounceComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RxjsRoutingModule {
  constructor(){
    
  }
}
