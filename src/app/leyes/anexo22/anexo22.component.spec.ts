import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anexo22Component } from './anexo22.component';

describe('Anexo22Component', () => {
  let component: Anexo22Component;
  let fixture: ComponentFixture<Anexo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Anexo22Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anexo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
