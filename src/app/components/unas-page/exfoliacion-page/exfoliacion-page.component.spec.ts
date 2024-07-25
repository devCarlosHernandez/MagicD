import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExfoliacionPageComponent } from './exfoliacion-page.component';

describe('ExfoliacionPageComponent', () => {
  let component: ExfoliacionPageComponent;
  let fixture: ComponentFixture<ExfoliacionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExfoliacionPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExfoliacionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
