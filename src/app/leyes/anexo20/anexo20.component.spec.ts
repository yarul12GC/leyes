import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anexo20Component } from './anexo20.component';

describe('Anexo20Component', () => {
  let component: Anexo20Component;
  let fixture: ComponentFixture<Anexo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Anexo20Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anexo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
