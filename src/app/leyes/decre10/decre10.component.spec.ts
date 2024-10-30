import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Decre10Component } from './decre10.component';

describe('Decre10Component', () => {
  let component: Decre10Component;
  let fixture: ComponentFixture<Decre10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Decre10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Decre10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
