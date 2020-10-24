import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RxjsComponent } from './rxjs.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { AsyncSubjectComponent } from './subjects/async-subject/async-subject.component';
import { BehaviorSubjectComponent } from './subjects/behavior-subject/behavior-subject.component';
import { RxjsOutletComponent } from './rxjs-outlet/rxjs-outlet.component';
import { ReplaySubjectComponent } from './subjects/replay-subject/replay-subject.component';
import { SubjectComponent } from './subjects/subject/subject.component';

const routes: Routes = [
  {
    path: 'rxjs',
    component: RxjsOutletComponent,
    children: [
      {
        path: '',
        component: RxjsComponent
      },
      {
        path: 'subjects',
        component: SubjectsComponent
      },
      {
        path: 'subjects/subject',
        component: SubjectComponent
      },
      {
        path: 'subjects/behavior-subject',
        component: BehaviorSubjectComponent
      },
      {
        path: 'subjects/replay-subject',
        component: ReplaySubjectComponent
      },
      {
        path: 'subjects/async-subject',
        component: AsyncSubjectComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RxjsRoutingModule {}
