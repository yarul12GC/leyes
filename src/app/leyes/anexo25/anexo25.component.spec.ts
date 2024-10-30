import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anexo25Component } from './anexo25.component';

describe('Anexo25Component', () => {
  let component: Anexo25Component;
  let fixture: ComponentFixture<Anexo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Anexo25Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anexo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
