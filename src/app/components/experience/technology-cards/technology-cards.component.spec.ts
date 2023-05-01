import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyCardsComponent } from './technology-cards.component';

describe('TechnologyCardsComponent', () => {
  let component: TechnologyCardsComponent;
  let fixture: ComponentFixture<TechnologyCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologyCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologyCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
