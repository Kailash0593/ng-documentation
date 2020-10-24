import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsOutletComponent } from './rxjs-outlet.component';

describe('RxjsOutletComponent', () => {
  let component: RxjsOutletComponent;
  let fixture: ComponentFixture<RxjsOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
