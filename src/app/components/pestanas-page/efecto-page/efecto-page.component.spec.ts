import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EfectoPageComponent } from './efecto-page.component';

describe('EfectoPageComponent', () => {
  let component: EfectoPageComponent;
  let fixture: ComponentFixture<EfectoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EfectoPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EfectoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
