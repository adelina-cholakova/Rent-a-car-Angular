import { Vehicle } from './vehicle.model';
import { Customer } from './customer.model';
export class Rent {
  id: number;
  customerId: number;
  vehicleId: number;
  start: Date;
  end: Date;

  customer: Customer;
  vehicle: Vehicle;
}
