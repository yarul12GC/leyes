import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anexo30Component } from './anexo30.component';

describe('Anexo30Component', () => {
  let component: Anexo30Component;
  let fixture: ComponentFixture<Anexo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Anexo30Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anexo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
