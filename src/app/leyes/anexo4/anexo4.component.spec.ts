import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anexo4Component } from './anexo4.component';

describe('Anexo4Component', () => {
  let component: Anexo4Component;
  let fixture: ComponentFixture<Anexo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Anexo4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anexo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
