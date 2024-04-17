import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataintensiveComponent } from './dataintensive.component';

describe('DataintensiveComponent', () => {
  let component: DataintensiveComponent;
  let fixture: ComponentFixture<DataintensiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataintensiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataintensiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
