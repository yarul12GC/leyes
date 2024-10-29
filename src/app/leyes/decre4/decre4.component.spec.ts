import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Decre4Component } from './decre4.component';

describe('Decre4Component', () => {
  let component: Decre4Component;
  let fixture: ComponentFixture<Decre4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Decre4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Decre4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
