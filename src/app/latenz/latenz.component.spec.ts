import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatenzComponent } from './latenz.component';

describe('LatenzComponent', () => {
  let component: LatenzComponent;
  let fixture: ComponentFixture<LatenzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatenzComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LatenzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
