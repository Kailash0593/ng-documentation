import { Component, Input, OnInit } from '@angular/core';
import { TopicInterface } from 'src/app/app.interface';
import * as _ from 'lodash';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss']
})
export class TopicListComponent implements OnInit {
  @Input() topics: TopicInterface [];
  topicList: TopicInterface [] = [];
  searchInput = new FormControl("");
  constructor() { }

  ngOnInit(): void {
    this.topicList.push(...this.topics);
    this.searchInput.valueChanges.pipe(
      debounceTime(200),
    ).subscribe((value: string) => {
      this.topicList = _(this.topics).filter((topic: TopicInterface) => {
        if(value.length>0){
          const test = new RegExp(`^[${topic.label}|\s]+$`, "gmi").test(value);
          return test;
        }else{
          return true;
        }
      }).value();
    });
  }
}