import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Decre12Component } from './decre12.component';

describe('Decre12Component', () => {
  let component: Decre12Component;
  let fixture: ComponentFixture<Decre12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Decre12Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Decre12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
