import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToapproveComponent } from './toapprove.component';

describe('ToapproveComponent', () => {
  let component: ToapproveComponent;
  let fixture: ComponentFixture<ToapproveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToapproveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToapproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
