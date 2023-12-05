import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoFelvitelComponent } from './auto-felvitel.component';

describe('AutoFelvitelComponent', () => {
  let component: AutoFelvitelComponent;
  let fixture: ComponentFixture<AutoFelvitelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoFelvitelComponent]
    });
    fixture = TestBed.createComponent(AutoFelvitelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
