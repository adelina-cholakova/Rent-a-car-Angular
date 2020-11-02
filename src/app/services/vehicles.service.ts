import { Vehicle } from './../models/vehicle.model';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class VehiclesService {
  url='http://localhost:3000/vehicles';

  constructor(private http: HttpClient){}

  getAll() :Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.url);
  }

  get(id: number) :Observable<Vehicle>{
    return this.http.get<Vehicle>(this.url + "/" + id);
  }

  delete(id: number) :Observable<void>{
    return this.http.delete<void>(this.url + "/" + id);
  }

  save(vehicle: Vehicle) :Observable<Vehicle> {
    if(vehicle.id) {
        return this.http.put<Vehicle>(this.url + "/" + vehicle.id, vehicle);
    } else {
      return this.http.post<Vehicle>(this.url, vehicle);
    }
  }
}
