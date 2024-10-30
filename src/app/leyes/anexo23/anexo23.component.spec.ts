import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anexo23Component } from './anexo23.component';

describe('Anexo23Component', () => {
  let component: Anexo23Component;
  let fixture: ComponentFixture<Anexo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Anexo23Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anexo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
