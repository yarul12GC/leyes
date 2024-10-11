import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglamentoleyComponent } from './reglamentoley.component';

describe('ReglamentoleyComponent', () => {
  let component: ReglamentoleyComponent;
  let fixture: ComponentFixture<ReglamentoleyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReglamentoleyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReglamentoleyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
