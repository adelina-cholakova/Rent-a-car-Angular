import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersEditDialogComponent } from './customers-edit-dialog.component';

describe('CustomersEditDialogComponent', () => {
  let component: CustomersEditDialogComponent;
  let fixture: ComponentFixture<CustomersEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
