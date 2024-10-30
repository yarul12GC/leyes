import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anexo17Component } from './anexo17.component';

describe('Anexo17Component', () => {
  let component: Anexo17Component;
  let fixture: ComponentFixture<Anexo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Anexo17Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anexo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
