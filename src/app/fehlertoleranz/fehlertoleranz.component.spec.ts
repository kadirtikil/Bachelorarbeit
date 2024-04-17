import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FehlertoleranzComponent } from './fehlertoleranz.component';

describe('FehlertoleranzComponent', () => {
  let component: FehlertoleranzComponent;
  let fixture: ComponentFixture<FehlertoleranzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FehlertoleranzComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FehlertoleranzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
