import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusesCardComponent } from './pluses-card.component';

describe('PlusesCardComponent', () => {
  let component: PlusesCardComponent;
  let fixture: ComponentFixture<PlusesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlusesCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlusesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
