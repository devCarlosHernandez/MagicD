import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasicasPageComponent } from './clasicas-page.component';

describe('ClasicasPageComponent', () => {
  let component: ClasicasPageComponent;
  let fixture: ComponentFixture<ClasicasPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClasicasPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClasicasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
