import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anexo26Component } from './anexo26.component';

describe('Anexo26Component', () => {
  let component: Anexo26Component;
  let fixture: ComponentFixture<Anexo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Anexo26Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anexo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
