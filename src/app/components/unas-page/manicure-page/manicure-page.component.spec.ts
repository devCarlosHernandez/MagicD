import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManicurePageComponent } from './manicure-page.component';

describe('ManicurePageComponent', () => {
  let component: ManicurePageComponent;
  let fixture: ComponentFixture<ManicurePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManicurePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManicurePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
