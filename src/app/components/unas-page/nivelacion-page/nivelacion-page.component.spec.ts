import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelacionPageComponent } from './nivelacion-page.component';

describe('NivelacionPageComponent', () => {
  let component: NivelacionPageComponent;
  let fixture: ComponentFixture<NivelacionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NivelacionPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NivelacionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
