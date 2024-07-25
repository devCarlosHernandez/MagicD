import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PestanasPageComponent } from './pestanas-page.component';

describe('PestanasPageComponent', () => {
  let component: PestanasPageComponent;
  let fixture: ComponentFixture<PestanasPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PestanasPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PestanasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
