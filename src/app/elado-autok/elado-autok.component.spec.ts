import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EladoAutokComponent } from './elado-autok.component';

describe('EladoAutokComponent', () => {
  let component: EladoAutokComponent;
  let fixture: ComponentFixture<EladoAutokComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EladoAutokComponent]
    });
    fixture = TestBed.createComponent(EladoAutokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
