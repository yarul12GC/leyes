import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anexo19Component } from './anexo19.component';

describe('Anexo19Component', () => {
  let component: Anexo19Component;
  let fixture: ComponentFixture<Anexo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Anexo19Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anexo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
