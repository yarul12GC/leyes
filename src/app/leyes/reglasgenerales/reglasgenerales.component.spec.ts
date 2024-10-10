import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglasgeneralesComponent } from './reglasgenerales.component';

describe('ReglasgeneralesComponent', () => {
  let component: ReglasgeneralesComponent;
  let fixture: ComponentFixture<ReglasgeneralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReglasgeneralesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReglasgeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
