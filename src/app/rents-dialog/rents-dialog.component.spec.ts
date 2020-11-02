import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentsDialogComponent } from './rents-dialog.component';

describe('RentsDialogComponent', () => {
  let component: RentsDialogComponent;
  let fixture: ComponentFixture<RentsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
