import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RealtyService {
  private displayedColumns: string[] = [
    'id',
    'date',
    'cost',
    'currency',
    'realty_capacity',
    'town',
    'district',
    'street',
    'source',
  ];

  getDisplayedColumns = () => this.displayedColumns;
}
