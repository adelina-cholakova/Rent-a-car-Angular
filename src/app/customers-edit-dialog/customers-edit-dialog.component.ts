import { CustomersService } from './../services/customers.service';
import { Customer } from './../models/customer.model';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-customers-edit-dialog',
  templateUrl: './customers-edit-dialog.component.html',
  styleUrls: ['./customers-edit-dialog.component.css']
})
export class CustomersEditDialogComponent implements OnInit {
  customer: Customer;
  formGroup: FormGroup;

  constructor(private fb: FormBuilder,
    private customerService: CustomersService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialogRef<CustomersEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.customer = data.customer;
  }

  ngOnInit(): void {
    this.buildFrom();
  }

  buildFrom():void {
    this.formGroup = this.fb.group({
      id: [this.customer.id],
      name: [this.customer.name, Validators.required],
      email: [this.customer.email, [Validators.required, Validators.email]],
      phone: [this.customer.phone, [Validators.required, Validators.pattern("^[0-9]*$"),
      Validators.minLength(10), Validators.maxLength(10)]]
    })
  }

  onSubmit():void {
    if(this.formGroup.invalid) {
      return
    }

    this.customerService.save(this.formGroup.value)
      .subscribe((customer) => {
        this._snackBar.open("Customer is saved!", "OK", {
          duration: 2000,
        });
        this.dialog.close(customer);
      })

  }
  closeForm() {
    this.dialog.close();
  }

 }
