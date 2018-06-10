import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignleadsComponent } from './assignleads.component';

describe('AssignleadsComponent', () => {
  let component: AssignleadsComponent;
  let fixture: ComponentFixture<AssignleadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignleadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignleadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
