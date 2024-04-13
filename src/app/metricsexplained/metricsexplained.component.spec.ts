import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricsexplainedComponent } from './metricsexplained.component';

describe('MetricsexplainedComponent', () => {
  let component: MetricsexplainedComponent;
  let fixture: ComponentFixture<MetricsexplainedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetricsexplainedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MetricsexplainedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
