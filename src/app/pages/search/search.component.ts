import { Component, OnInit } from '@angular/core';
import { RealtyService } from '../../services/realty.service';
import { ApiConnectionService } from '../../services/api-connection.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  displayedColumns: string[] = this.realtyService.getQueryFields();
  sortOptions = [
    { value: 'asc', viewValue: 'По возрастанию' },
    { value: 'desc', viewValue: 'По убыванию' },
  ];

  requestedData: string[] = [];

  sortBy = '';
  fieldSortedBy = '';

  constructor(
    private realtyService: RealtyService,
    private apiConnection: ApiConnectionService
  ) {}

  ngOnInit(): void {}

  searchButtonHandler = () => {
    this.apiConnection
      .get(`/realty?order=${this.fieldSortedBy},${this.sortBy}`)
      .subscribe(
        (result: []) => {
          this.requestedData = result.map(
            (r) =>
              `${
                r[this.fieldSortedBy]
              }\xa0\xa0\xa0\xa0\xa0\xa0\xa0${JSON.stringify(r)}`
          );
        },
        (e) => {
          console.log(e);
          this.refreshButtonHandler();
        }
      );
  };

  refreshButtonHandler = () => {
    this.requestedData = [];
    this.sortBy = '';
    this.fieldSortedBy = '';
  };
}
