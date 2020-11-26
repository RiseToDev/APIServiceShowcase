import { Component, OnInit } from '@angular/core';
import { RealtyService } from '../../services/realty.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  displayedColumns: string[] = this.realtyService.getDisplayedColumns();
  sortOptions = [
    { value: 'acs', viewValue: 'По возрастанию' },
    { value: 'desc', viewValue: 'По убыванию' },
  ];

  constructor(private realtyService: RealtyService) {}

  ngOnInit(): void {}
}
