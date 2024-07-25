import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcrilicasPageComponent } from './acrilicas-page.component';

describe('AcrilicasPageComponent', () => {
  let component: AcrilicasPageComponent;
  let fixture: ComponentFixture<AcrilicasPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcrilicasPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcrilicasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
