import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnasPageComponent } from './unas-page.component';

describe('UnasPageComponent', () => {
  let component: UnasPageComponent;
  let fixture: ComponentFixture<UnasPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnasPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
