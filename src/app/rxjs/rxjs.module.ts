import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsRoutingModule } from './rxjs-routing.module';
import { RxjsComponent } from './rxjs.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { AsyncSubjectComponent } from './subjects/async-subject/async-subject.component';
import { BehaviorSubjectComponent } from './subjects/behavior-subject/behavior-subject.component';
import { RxjsOutletComponent } from './rxjs-outlet/rxjs-outlet.component';
import { ReplaySubjectComponent } from './subjects/replay-subject/replay-subject.component';
import { SubjectComponent } from './subjects/subject/subject.component';
import { SideMenuModule } from './../templates/side-menu/side-menu.module';
import { TopicListModule } from './../templates/topic-list/topic-list.module';
import { BreadcrumbModule } from './../templates/breadcrumb/breadcrumb.module';
import { OperatorsComponent } from './operators/operators.component';
import { MapsComponent } from './operators/maps/maps.component';
import { SwitchMapComponent } from './operators/maps/switch-map/switch-map.component';
import { MergeMapComponent } from './operators/maps/merge-map/merge-map.component';
import { DebounceComponent } from './operators/debounce/debounce.component';

@NgModule({
  declarations: [
    RxjsComponent,
    RxjsOutletComponent,
    SubjectsComponent,
    AsyncSubjectComponent,
    BehaviorSubjectComponent,
    ReplaySubjectComponent,
    SubjectComponent,
    OperatorsComponent,
    SwitchMapComponent,
    MergeMapComponent,
    MapsComponent,
    DebounceComponent,
  ],
  imports: [
    CommonModule,
    RxjsRoutingModule,
    // templates
    SideMenuModule,
    TopicListModule,
    BreadcrumbModule
  ],
})
export class RxjsModule {}
