import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInitialComponent } from './form-initial.component';

describe('FormInitialComponent', () => {
  let component: FormInitialComponent;
  let fixture: ComponentFixture<FormInitialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormInitialComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
