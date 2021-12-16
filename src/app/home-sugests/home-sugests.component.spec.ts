import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSugestsComponent } from './home-sugests.component';

describe('HomeSugestsComponent', () => {
  let component: HomeSugestsComponent;
  let fixture: ComponentFixture<HomeSugestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSugestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSugestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
