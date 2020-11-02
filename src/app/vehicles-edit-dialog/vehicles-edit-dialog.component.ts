import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { VehiclesService } from './../services/vehicles.service';
import { Vehicle } from './../models/vehicle.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-vehicles-edit-dialog',
  templateUrl: './vehicles-edit-dialog.component.html',
  styleUrls: ['./vehicles-edit-dialog.component.css']
})
export class VehiclesEditDialogComponent implements OnInit {
  vehicle: Vehicle;
  formGroup: FormGroup;
  constructor(private fb: FormBuilder,
    private vehiclesService: VehiclesService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialogRef<VehiclesEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.vehicle = data.vehicle;
  }


  ngOnInit(): void {
    this.buildFrom();
  }

  buildFrom():void {
    this.formGroup = this.fb.group({
      id: [this.vehicle.id],
      type: [this.vehicle.type, Validators.required],
      brand: [this.vehicle.brand, Validators.required],
      model: [this.vehicle.model, Validators.required],
      year: [this.vehicle.year, [Validators.required, Validators.min(1990), Validators.max(2020)]],
      fuelType: [this.vehicle.fuelType, Validators.required],
      seats: [this.vehicle.seats, [Validators.required, Validators.min(2), Validators.max(7)]],
      picture: [this.vehicle.picture, Validators.required],
      pricePerDay: [this.vehicle.pricePerDay, [Validators.required, Validators.min(0)]],
      count: [this.vehicle.count, [Validators.required, Validators.min(0)]]
    })
  }
  onSubmit():void {
    if(this.formGroup.invalid) {
      return
    }

    this.vehiclesService.save(this.formGroup.value)
      .subscribe((vehicle) => {
        this._snackBar.open("Vehicle is saved!", "OK", {
          duration: 2000,
        });
        this.dialog.close(vehicle);
      })

  }

  closeFrom() {
    this.dialog.close();
  }


}
