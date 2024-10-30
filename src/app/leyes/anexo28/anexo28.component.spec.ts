import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anexo28Component } from './anexo28.component';

describe('Anexo28Component', () => {
  let component: Anexo28Component;
  let fixture: ComponentFixture<Anexo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Anexo28Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anexo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
