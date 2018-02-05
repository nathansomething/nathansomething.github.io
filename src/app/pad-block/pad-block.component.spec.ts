import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadBlockComponent } from './pad-block.component';

describe('PadBlockComponent', () => {
  let component: PadBlockComponent;
  let fixture: ComponentFixture<PadBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
