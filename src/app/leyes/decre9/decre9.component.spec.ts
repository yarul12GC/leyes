import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Decre9Component } from './decre9.component';

describe('Decre9Component', () => {
  let component: Decre9Component;
  let fixture: ComponentFixture<Decre9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Decre9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Decre9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
