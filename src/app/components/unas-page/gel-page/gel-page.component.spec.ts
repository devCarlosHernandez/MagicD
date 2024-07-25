import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GelPageComponent } from './gel-page.component';

describe('GelPageComponent', () => {
  let component: GelPageComponent;
  let fixture: ComponentFixture<GelPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GelPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
