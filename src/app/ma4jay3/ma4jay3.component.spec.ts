import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ma4jay3Component } from './ma4jay3.component';

describe('Ma4jay3Component', () => {
  let component: Ma4jay3Component;
  let fixture: ComponentFixture<Ma4jay3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ma4jay3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ma4jay3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
