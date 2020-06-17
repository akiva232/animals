import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterjirrafComponent } from './footerjirraf.component';

describe('FooterjirrafComponent', () => {
  let component: FooterjirrafComponent;
  let fixture: ComponentFixture<FooterjirrafComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterjirrafComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterjirrafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
