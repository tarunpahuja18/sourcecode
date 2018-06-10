import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainscreenDynamicComponent } from './mainscreendynamic.component';

describe('MainscreenDynamicComponent', () => {
  let component: MainscreenDynamicComponent;
  let fixture: ComponentFixture<MainscreenDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainscreenDynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainscreenDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
