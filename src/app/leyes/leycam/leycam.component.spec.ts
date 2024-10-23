import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeycamComponent } from './leycam.component';

describe('LeycamComponent', () => {
  let component: LeycamComponent;
  let fixture: ComponentFixture<LeycamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeycamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeycamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
