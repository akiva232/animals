import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootertigerComponent } from './footertiger.component';

describe('FootertigerComponent', () => {
  let component: FootertigerComponent;
  let fixture: ComponentFixture<FootertigerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootertigerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootertigerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
