import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyCardsComponent } from './journey-cards.component';

describe('JourneyCardsComponent', () => {
  let component: JourneyCardsComponent;
  let fixture: ComponentFixture<JourneyCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JourneyCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JourneyCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
