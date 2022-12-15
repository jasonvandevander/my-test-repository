import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedHeaderComponent } from './completed-header.component';

describe('CompletedHeaderComponent', () => {
  let component: CompletedHeaderComponent;
  let fixture: ComponentFixture<CompletedHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletedHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
