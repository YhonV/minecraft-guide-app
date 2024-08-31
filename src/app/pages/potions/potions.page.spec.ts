import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PotionsPage } from './potions.page';

describe('PotionsPage', () => {
  let component: PotionsPage;
  let fixture: ComponentFixture<PotionsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PotionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
