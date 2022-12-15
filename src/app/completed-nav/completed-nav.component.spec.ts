import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedNavComponent } from './completed-nav.component';

describe('CompletedNavComponent', () => {
  let component: CompletedNavComponent;
  let fixture: ComponentFixture<CompletedNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletedNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
