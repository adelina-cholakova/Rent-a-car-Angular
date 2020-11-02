import { RentsDialogComponent } from './../rents-dialog/rents-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { VehiclesEditDialogComponent } from './../vehicles-edit-dialog/vehicles-edit-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Vehicle } from './../models/vehicle.model';
import { VehiclesService } from './../services/vehicles.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  vehicles: Vehicle[];
  // displayedColumns: string[] = ['type', 'brand', 'model', 'year', 'fuelType', 'seats', 'picture', 'pricePerDay', 'count', 'actions'];


  constructor(private vehiclesService: VehiclesService,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getVehicles();
  }

  private getVehicles(): void {
    this.vehiclesService.getAll().subscribe((vehicles) => {
      this.vehicles = vehicles;
    });
  }


  editVehicle(vehicle: Vehicle): void {
    let dialogRef = this.dialog.open(VehiclesEditDialogComponent, {
      data: { vehicle: vehicle },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if(result) {
        this.getVehicles();
      }
    });
  }


  deleteVehicle(vehicle: Vehicle) {
    var r = confirm('Are you sure you want to delete this vehicle?');
    if (r == true) {
      this.vehiclesService.delete(vehicle.id).subscribe(() => {
        this._snackBar.open('Vehicle is deleted!', null, {
          duration: 2000,
        });
        this.getVehicles();
      });
    }
  }

  addVehicle():void {
    this.editVehicle(new Vehicle());
  }

  rent(vehicle) {
    let dialogRef = this.dialog.open(RentsDialogComponent, {
      data: { vehicle: vehicle },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if(result) {
        this.getVehicles();
      }
    });
  }
}
