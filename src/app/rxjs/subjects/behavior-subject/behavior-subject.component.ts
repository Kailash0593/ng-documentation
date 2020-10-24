import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.scss']
})
export class BehaviorSubjectComponent implements OnInit {
  subject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  constructor() { }

  ngOnInit(): void {
    const sub1 = this.subject.subscribe((data) => console.log(data))
    this.subject.next(5);
    this.subject.subscribe((data) => console.log(data)).unsubscribe();
    this.subject.next(10);
    this.subject.subscribe((data) => console.log(data)).unsubscribe();
    this.subject.next(15);
    sub1.unsubscribe();
  }

}
