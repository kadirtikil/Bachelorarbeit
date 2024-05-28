import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMarkdownComponent } from './edit-markdown.component';

describe('EditMarkdownComponent', () => {
  let component: EditMarkdownComponent;
  let fixture: ComponentFixture<EditMarkdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditMarkdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditMarkdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
