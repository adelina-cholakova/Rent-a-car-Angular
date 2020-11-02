import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomersService } from './../services/customers.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer.model';
import { CustomersEditDialogComponent } from '../customers-edit-dialog/customers-edit-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'phone', 'actions'];

  customers: Customer[];

  constructor(
    private customersService: CustomersService,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getCustomers();
  }

  deleteCustomer(customer: Customer) {
    var r = confirm('Are you sure you want to delete ' + customer.name + '?');
    if (r == true) {
      this.customersService.delete(customer.id).subscribe(() => {
        this._snackBar.open('Customer is deleted!', null, {
          duration: 2000,
        });
        this.getCustomers();
      });
    }
  }

  private getCustomers(): void {
    this.customersService.getAll().subscribe((customers) => {
      this.customers = customers;
    });
  }

  editCustomer(customer: Customer): void {
    let dialogRef = this.dialog.open(CustomersEditDialogComponent, {
      data: { customer: customer },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if(result) {
        this.getCustomers();
      }
    });
  }

  addCustomer(): void {
    this.editCustomer(new Customer());
  }
}
