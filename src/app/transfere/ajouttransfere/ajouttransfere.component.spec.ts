import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouttransfereComponent } from './ajouttransfere.component';

describe('AjouttransfereComponent', () => {
  let component: AjouttransfereComponent;
  let fixture: ComponentFixture<AjouttransfereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouttransfereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouttransfereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
