import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Service } from './service.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  services: Array<Service>;

  constructor() {
   }

   getServices(): Observable<Service[]> {
     return of (this.services)
   }

}
