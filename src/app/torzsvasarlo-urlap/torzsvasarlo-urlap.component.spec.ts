import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorzsvasarloUrlapComponent } from './torzsvasarlo-urlap.component';

describe('TorzsvasarloUrlapComponent', () => {
  let component: TorzsvasarloUrlapComponent;
  let fixture: ComponentFixture<TorzsvasarloUrlapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TorzsvasarloUrlapComponent]
    });
    fixture = TestBed.createComponent(TorzsvasarloUrlapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
