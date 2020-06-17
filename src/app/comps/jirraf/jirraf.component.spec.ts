import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JirrafComponent } from './jirraf.component';

describe('JirrafComponent', () => {
  let component: JirrafComponent;
  let fixture: ComponentFixture<JirrafComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JirrafComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JirrafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
