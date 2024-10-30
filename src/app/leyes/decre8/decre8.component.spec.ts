import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Decre8Component } from './decre8.component';

describe('Decre8Component', () => {
  let component: Decre8Component;
  let fixture: ComponentFixture<Decre8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Decre8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Decre8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
