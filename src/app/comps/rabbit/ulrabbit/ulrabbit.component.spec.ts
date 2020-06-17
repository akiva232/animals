import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UlrabbitComponent } from './ulrabbit.component';

describe('UlrabbitComponent', () => {
  let component: UlrabbitComponent;
  let fixture: ComponentFixture<UlrabbitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UlrabbitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UlrabbitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
