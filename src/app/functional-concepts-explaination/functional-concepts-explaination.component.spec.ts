import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalConceptsExplainationComponent } from './functional-concepts-explaination.component';

describe('FunctionalConceptsExplainationComponent', () => {
  let component: FunctionalConceptsExplainationComponent;
  let fixture: ComponentFixture<FunctionalConceptsExplainationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunctionalConceptsExplainationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FunctionalConceptsExplainationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
