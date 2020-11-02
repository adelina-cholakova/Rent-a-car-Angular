import { Rent } from './../models/rent.model';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class RentsService {
  url='http://localhost:3000/rents';

  constructor(private http: HttpClient){}

  getAll() :Observable<Rent[]> {
    let params = new HttpParams();
    params=params.append("_expand", "vehicle");
    params=params.append("_expand", "customer")

    return this.http.get<Rent[]>(this.url, {
      params: params
    });
  }

  delete(id: number) :Observable<void>{
    return this.http.delete<void>(this.url + "/" + id);
  }

  save(rent: Rent) :Observable<Rent> {
    if(rent.id) {
        return this.http.put<Rent>(this.url + "/" + rent.id, rent);
    } else {
      return this.http.post<Rent>(this.url, rent);
    }
  }
}
