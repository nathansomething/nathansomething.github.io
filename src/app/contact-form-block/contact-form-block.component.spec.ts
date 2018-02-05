import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormBlockComponent } from './contact-form-block.component';

describe('ContactFormBlockComponent', () => {
  let component: ContactFormBlockComponent;
  let fixture: ComponentFixture<ContactFormBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactFormBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
