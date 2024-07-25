import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HibridaPageComponent } from './hibrida-page.component';

describe('HibridaPageComponent', () => {
  let component: HibridaPageComponent;
  let fixture: ComponentFixture<HibridaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HibridaPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HibridaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
