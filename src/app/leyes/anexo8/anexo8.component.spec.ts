import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anexo8Component } from './anexo8.component';

describe('Anexo8Component', () => {
  let component: Anexo8Component;
  let fixture: ComponentFixture<Anexo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Anexo8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anexo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
