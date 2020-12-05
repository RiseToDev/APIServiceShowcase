import {Component, OnInit} from '@angular/core';
import {RealtyService} from '../../services/realty.service';
import {ApiConnectionService} from '../../services/api-connection.service';
import {IRealtyEntity} from "../realty/realty.component";
import * as moment from "moment";

interface ISearchRealty extends IRealtyEntity {
  fieldSortedBy: any;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  displayedColumns: string[] = this.realtyService.getQueryFields();
  sortOptions = [
    {value: 'asc', viewValue: 'По возрастанию'},
    {value: 'desc', viewValue: 'По убыванию'},
  ];

  displayedColumnsForTable = ['fieldSortedBy'].concat(this.realtyService.getDisplayedColumns());
  requestedData: string[] = [];

  sortBy = '';
  fieldSortedBy = '';

  constructor(
    private realtyService: RealtyService,
    private apiConnection: ApiConnectionService
  ) {
  }

  ngOnInit(): void {
  }

  searchButtonHandler = () => {
    this.apiConnection
      .get(`/realty?order=${this.fieldSortedBy},${this.sortBy}`)
      .subscribe(
        (result: []) => {
          this.requestedData = result.map(
            (r: any) => {
              r.date = moment(r.date).format('LL');
              r.fieldSortedBy = this.fieldSortedBy === 'date'
                ? r.date
                : r[this.fieldSortedBy];
              return r;
            });
        },
        () => {
          this.refreshButtonHandler();
        }
      );
  }

  refreshButtonHandler = () => {
    this.requestedData = [];
    this.sortBy = '';
    this.fieldSortedBy = '';
  }
}

