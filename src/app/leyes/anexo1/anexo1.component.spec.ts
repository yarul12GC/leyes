import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anexo1Component } from './anexo1.component';

describe('Anexo1Component', () => {
  let component: Anexo1Component;
  let fixture: ComponentFixture<Anexo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Anexo1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anexo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
