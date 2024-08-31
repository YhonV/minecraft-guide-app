import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MobsPage } from './mobs.page';

describe('MobsPage', () => {
  let component: MobsPage;
  let fixture: ComponentFixture<MobsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MobsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
