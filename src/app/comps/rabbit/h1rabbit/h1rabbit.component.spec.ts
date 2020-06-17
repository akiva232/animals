import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { H1rabbitComponent } from './h1rabbit.component';

describe('H1rabbitComponent', () => {
  let component: H1rabbitComponent;
  let fixture: ComponentFixture<H1rabbitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H1rabbitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H1rabbitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
