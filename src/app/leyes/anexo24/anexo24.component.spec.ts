import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anexo24Component } from './anexo24.component';

describe('Anexo24Component', () => {
  let component: Anexo24Component;
  let fixture: ComponentFixture<Anexo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Anexo24Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anexo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
