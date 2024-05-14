import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgdisplayerComponent } from './svgdisplayer.component';

describe('SvgdisplayerComponent', () => {
  let component: SvgdisplayerComponent;
  let fixture: ComponentFixture<SvgdisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgdisplayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgdisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
