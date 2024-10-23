import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeymaqComponent } from './leymaq.component';

describe('LeymaqComponent', () => {
  let component: LeymaqComponent;
  let fixture: ComponentFixture<LeymaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeymaqComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeymaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
