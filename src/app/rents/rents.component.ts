import { MatSnackBar } from '@angular/material/snack-bar';
import { Rent } from './../models/rent.model';
import { RentsService } from './../services/rents.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rents',
  templateUrl: './rents.component.html',
  styleUrls: ['./rents.component.css']
})
export class RentsComponent implements OnInit {
  displayedColumns: string[] = ['vehicle', 'customer', 'from', 'to', 'actions'];

  rents: Rent[];
  constructor(private rentsService: RentsService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getRents();
  }
  private getRents(): void {
    this.rentsService.getAll().subscribe((rents) => {
      this.rents = rents;
    });
  }

  deleteRent(rent: Rent) {
    var r = confirm('Are you sure you want to delete this rent?');
    if (r == true) {
      this.rentsService.delete(rent.id).subscribe(() => {
        this._snackBar.open('Rent is deleted!', null, {
          duration: 2000,
        });
        this.getRents();
      });
    }
  }

}
