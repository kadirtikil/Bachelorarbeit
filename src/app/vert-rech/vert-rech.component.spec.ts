import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VertRechComponent } from './vert-rech.component';

describe('VertRechComponent', () => {
  let component: VertRechComponent;
  let fixture: ComponentFixture<VertRechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VertRechComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VertRechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
