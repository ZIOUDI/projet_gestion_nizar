import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueDeTransfereComponent } from './historique-de-transfere.component';

describe('HistoriqueDeTransfereComponent', () => {
  let component: HistoriqueDeTransfereComponent;
  let fixture: ComponentFixture<HistoriqueDeTransfereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriqueDeTransfereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoriqueDeTransfereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
