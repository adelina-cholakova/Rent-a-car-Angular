import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesEditDialogComponent } from './vehicles-edit-dialog.component';

describe('VehiclesEditDialogComponent', () => {
  let component: VehiclesEditDialogComponent;
  let fixture: ComponentFixture<VehiclesEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclesEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
