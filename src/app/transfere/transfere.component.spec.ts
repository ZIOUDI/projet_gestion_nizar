import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfereComponent } from './transfere.component';

describe('TransfereComponent', () => {
  let component: TransfereComponent;
  let fixture: ComponentFixture<TransfereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransfereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransfereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
