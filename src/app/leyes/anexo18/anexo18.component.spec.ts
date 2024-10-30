import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anexo18Component } from './anexo18.component';

describe('Anexo18Component', () => {
  let component: Anexo18Component;
  let fixture: ComponentFixture<Anexo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Anexo18Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anexo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
