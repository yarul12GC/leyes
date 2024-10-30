import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anexo27Component } from './anexo27.component';

describe('Anexo27Component', () => {
  let component: Anexo27Component;
  let fixture: ComponentFixture<Anexo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Anexo27Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anexo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
