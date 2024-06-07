import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthForMarkdownEditComponent } from './auth-for-markdown-edit.component';

describe('AuthForMarkdownEditComponent', () => {
  let component: AuthForMarkdownEditComponent;
  let fixture: ComponentFixture<AuthForMarkdownEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthForMarkdownEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthForMarkdownEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
