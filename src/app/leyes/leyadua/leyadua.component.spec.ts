import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeyaduaComponent } from './leyadua.component';

describe('LeyaduaComponent', () => {
  let component: LeyaduaComponent;
  let fixture: ComponentFixture<LeyaduaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeyaduaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeyaduaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
