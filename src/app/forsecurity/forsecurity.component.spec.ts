import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForsecurityComponent } from './forsecurity.component';

describe('ForsecurityComponent', () => {
  let component: ForsecurityComponent;
  let fixture: ComponentFixture<ForsecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForsecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForsecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
