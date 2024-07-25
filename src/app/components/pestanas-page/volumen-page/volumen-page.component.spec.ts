import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumenPageComponent } from './volumen-page.component';

describe('VolumenPageComponent', () => {
  let component: VolumenPageComponent;
  let fixture: ComponentFixture<VolumenPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolumenPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolumenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
