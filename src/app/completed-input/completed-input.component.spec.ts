import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedInputComponent } from './completed-input.component';

describe('CompletedInputComponent', () => {
  let component: CompletedInputComponent;
  let fixture: ComponentFixture<CompletedInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletedInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
