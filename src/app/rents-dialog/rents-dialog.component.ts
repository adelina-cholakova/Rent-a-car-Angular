import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Customer } from './../models/customer.model';
import { CustomersService } from './../services/customers.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Vehicle } from './../models/vehicle.model';
import { RentsService } from './../services/rents.service';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-rents-dialog',
  templateUrl: './rents-dialog.component.html',
  styleUrls: ['./rents-dialog.component.css']
})
export class RentsDialogComponent implements OnInit {
  formGroup: FormGroup;
  vehicle: Vehicle;
  customers: Customer[];

  constructor(private rentsService: RentsService,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    public dialog: MatDialogRef<RentsDialogComponent>,
    private customersService: CustomersService,
    @Inject(MAT_DIALOG_DATA) public data: any) { this.vehicle = data.vehicle;}


  ngOnInit(): void {
    this.customersService.getAll().subscribe((customers) => {
      this.customers = customers;
    })
    this.buildFrom();
  }

  buildFrom():void {
    this.formGroup = this.fb.group({
      customerId: [null, Validators.required],
      vehicleId: [this.vehicle.id, Validators.required],
      start: [null, Validators.required],
      end: [null, Validators.required]
    })

  }
  onSubmit() {
    if(this.formGroup.invalid) {
      return
    }

    this.rentsService.save(this.formGroup.value)
      .subscribe((rent) => {
        this._snackBar.open("Rent is saved!", "OK", {
          duration: 2000,
        });
        this.dialog.close(rent);
      })


  }

}
