import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextDefaultComponent } from './text-default.component';

describe('TextDefaultComponent', () => {
  let component: TextDefaultComponent;
  let fixture: ComponentFixture<TextDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextDefaultComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
