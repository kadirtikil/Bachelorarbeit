import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestbarkeitComponent } from './testbarkeit.component';

describe('TestbarkeitComponent', () => {
  let component: TestbarkeitComponent;
  let fixture: ComponentFixture<TestbarkeitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestbarkeitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestbarkeitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
