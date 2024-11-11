import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reso1Component } from './reso1.component';

describe('Reso1Component', () => {
  let component: Reso1Component;
  let fixture: ComponentFixture<Reso1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reso1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reso1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
