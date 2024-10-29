import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Decre2Component } from './decre2.component';

describe('Decre2Component', () => {
  let component: Decre2Component;
  let fixture: ComponentFixture<Decre2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Decre2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Decre2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
