import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgieCardComponent } from './budgie-card.component';

describe('BudgieCardComponent', () => {
  let component: BudgieCardComponent;
  let fixture: ComponentFixture<BudgieCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgieCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
