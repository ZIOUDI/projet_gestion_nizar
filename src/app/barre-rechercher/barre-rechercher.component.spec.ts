import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarreRechercherComponent } from './barre-rechercher.component';

describe('BarreRechercherComponent', () => {
  let component: BarreRechercherComponent;
  let fixture: ComponentFixture<BarreRechercherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarreRechercherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarreRechercherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
