import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anexo29Component } from './anexo29.component';

describe('Anexo29Component', () => {
  let component: Anexo29Component;
  let fixture: ComponentFixture<Anexo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Anexo29Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anexo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
