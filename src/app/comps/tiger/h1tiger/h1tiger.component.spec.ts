import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { H1tigerComponent } from './h1tiger.component';

describe('H1tigerComponent', () => {
  let component: H1tigerComponent;
  let fixture: ComponentFixture<H1tigerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H1tigerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H1tigerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
