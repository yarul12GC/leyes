import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglasycriteriosComponent } from './reglasycriterios.component';

describe('ReglasycriteriosComponent', () => {
  let component: ReglasycriteriosComponent;
  let fixture: ComponentFixture<ReglasycriteriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReglasycriteriosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReglasycriteriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
