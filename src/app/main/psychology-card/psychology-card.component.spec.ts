import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychologyCardComponent } from './psychology-card.component';

describe('PsychologyCardComponent', () => {
  let component: PsychologyCardComponent;
  let fixture: ComponentFixture<PsychologyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsychologyCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsychologyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
