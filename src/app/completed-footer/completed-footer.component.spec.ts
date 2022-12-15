import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedFooterComponent } from './completed-footer.component';

describe('CompletedFooterComponent', () => {
  let component: CompletedFooterComponent;
  let fixture: ComponentFixture<CompletedFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletedFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
