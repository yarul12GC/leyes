import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anexo16Component } from './anexo16.component';

describe('Anexo16Component', () => {
  let component: Anexo16Component;
  let fixture: ComponentFixture<Anexo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Anexo16Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anexo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
