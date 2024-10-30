import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anexo21Component } from './anexo21.component';

describe('Anexo21Component', () => {
  let component: Anexo21Component;
  let fixture: ComponentFixture<Anexo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Anexo21Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anexo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
