import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Unas5dPageComponent } from './unas5d-page.component';

describe('Unas5dPageComponent', () => {
  let component: Unas5dPageComponent;
  let fixture: ComponentFixture<Unas5dPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Unas5dPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Unas5dPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
