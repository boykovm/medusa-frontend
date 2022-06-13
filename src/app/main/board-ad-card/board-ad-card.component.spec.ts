import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardAdCardComponent } from './board-ad-card.component';

describe('BoardAdCardComponent', () => {
  let component: BoardAdCardComponent;
  let fixture: ComponentFixture<BoardAdCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardAdCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardAdCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
