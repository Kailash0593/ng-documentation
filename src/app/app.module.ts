import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RxjsModule } from './rxjs/rxjs.module';
import { TopicsComponent } from './topics/topics.component';
import { TopicListModule } from './templates/topic-list/topic-list.module';

@NgModule({
  declarations: [
    AppComponent,
    TopicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    RxjsModule,
    //templates
    TopicListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
