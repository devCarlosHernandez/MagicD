import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Unas3dPageComponent } from './unas3d-page.component';

describe('Unas3dPageComponent', () => {
  let component: Unas3dPageComponent;
  let fixture: ComponentFixture<Unas3dPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Unas3dPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Unas3dPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
