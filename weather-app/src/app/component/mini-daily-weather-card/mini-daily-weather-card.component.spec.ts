import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniDailyWeatherCardComponent } from './mini-daily-weather-card.component';

describe('MiniDailyWeatherCardComponent', () => {
  let component: MiniDailyWeatherCardComponent;
  let fixture: ComponentFixture<MiniDailyWeatherCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniDailyWeatherCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniDailyWeatherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
