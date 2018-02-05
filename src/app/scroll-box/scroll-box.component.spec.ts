import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollBoxComponent } from './scroll-box.component';

describe('ScrollBoxComponent', () => {
  let component: ScrollBoxComponent;
  let fixture: ComponentFixture<ScrollBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
