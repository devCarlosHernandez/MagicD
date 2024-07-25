import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisenosPageComponent } from './disenos-page.component';

describe('DisenosPageComponent', () => {
  let component: DisenosPageComponent;
  let fixture: ComponentFixture<DisenosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisenosPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisenosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
