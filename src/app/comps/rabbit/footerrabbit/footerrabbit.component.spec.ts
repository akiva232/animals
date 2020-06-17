import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterrabbitComponent } from './footerrabbit.component';

describe('FooterrabbitComponent', () => {
  let component: FooterrabbitComponent;
  let fixture: ComponentFixture<FooterrabbitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterrabbitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterrabbitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
