import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakecallsComponent } from './makecalls.component';

describe('MakecallsComponent', () => {
  let component: MakecallsComponent;
  let fixture: ComponentFixture<MakecallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakecallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakecallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
