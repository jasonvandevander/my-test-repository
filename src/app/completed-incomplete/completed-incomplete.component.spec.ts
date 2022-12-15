import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedIncompleteComponent } from './completed-incomplete.component';

describe('CompletedIncompleteComponent', () => {
  let component: CompletedIncompleteComponent;
  let fixture: ComponentFixture<CompletedIncompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedIncompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletedIncompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
