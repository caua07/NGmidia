import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaFComponent } from './cta-f.component';

describe('CtaFComponent', () => {
  let component: CtaFComponent;
  let fixture: ComponentFixture<CtaFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtaFComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CtaFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
