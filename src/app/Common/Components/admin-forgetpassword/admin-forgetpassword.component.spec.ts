import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminForgetpasswordComponent } from './admin-forgetpassword.component';

describe('AdminForgetpasswordComponent', () => {
  let component: AdminForgetpasswordComponent;
  let fixture: ComponentFixture<AdminForgetpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminForgetpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminForgetpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
