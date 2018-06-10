import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignControlsComponent } from './assigncontrols.component';

describe('AssignControlsComponent', () => {
  let component: AssignControlsComponent;
  let fixture: ComponentFixture<AssignControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
