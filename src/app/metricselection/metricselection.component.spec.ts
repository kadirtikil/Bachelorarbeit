import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricselectionComponent } from './metricselection.component';

describe('MetricselectionComponent', () => {
  let component: MetricselectionComponent;
  let fixture: ComponentFixture<MetricselectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetricselectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MetricselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
