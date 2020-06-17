import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UljirrafComponent } from './uljirraf.component';

describe('UljirrafComponent', () => {
  let component: UljirrafComponent;
  let fixture: ComponentFixture<UljirrafComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UljirrafComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UljirrafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
