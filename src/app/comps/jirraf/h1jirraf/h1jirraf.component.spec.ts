import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { H1jirrafComponent } from './h1jirraf.component';

describe('H1jirrafComponent', () => {
  let component: H1jirrafComponent;
  let fixture: ComponentFixture<H1jirrafComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H1jirrafComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H1jirrafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
