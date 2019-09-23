import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthoriserComponent } from './authoriser.component';

describe('AuthoriserComponent', () => {
  let component: AuthoriserComponent;
  let fixture: ComponentFixture<AuthoriserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthoriserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthoriserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
