import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ley27Component } from './ley27.component';

describe('Ley27Component', () => {
  let component: Ley27Component;
  let fixture: ComponentFixture<Ley27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ley27Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ley27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
