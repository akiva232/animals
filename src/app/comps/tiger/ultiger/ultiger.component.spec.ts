import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UltigerComponent } from './ultiger.component';

describe('UltigerComponent', () => {
  let component: UltigerComponent;
  let fixture: ComponentFixture<UltigerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltigerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltigerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
