import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent implements OnInit {
  subject: AsyncSubject<number> = new AsyncSubject<number>();
  constructor() { }

  ngOnInit(): void {
    this.subject.subscribe((data) => console.log(data));
    this.subjectNext(123);
    this.subject.subscribe((data) => console.log(data));
    this.subjectNext(456);
    this.subject.subscribe((data) => console.log(data));
    this.subjectNext(456);
    this.subject.complete();
  }

  subjectNext(data: number){
    this.subject.next(data);
  }

}
