import {Component, OnInit} from '@angular/core';
import {ApiConnectionService} from '../../services/api-connection.service';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {NestedTreeControl} from '@angular/cdk/tree';
import * as moment from 'moment';

interface IRealtyEntity {
  id: number;
  name: string;
  date: string;
  cost: number;
  currency: string;
  realty_capacity: number;
  operation_type: string;
  town: string;
  district: string;
  street: string;
  source: string;
}

interface IRealty {
  name: string;
  children: IRealty[];
}

@Component({
  selector: 'app-realty',
  templateUrl: './realty.component.html',
  styleUrls: ['./realty.component.css'],
})
export class RealtyComponent implements OnInit {
  treeControl = new NestedTreeControl<IRealty>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<IRealty>();

  displayedColumns: string[] = [
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

  panelOpenState = false;
  constructor(private apiConnection: ApiConnectionService) {
    // this.dataSource.data = [];
  }
  hasChild = (_: number, node: IRealty) =>
    !!node.children && node.children.length > 0;

  ngOnInit(): void {
    this.apiConnection.get('/realty').subscribe(
      (res: []) => {
        let rent = [],
          forSale = [],
          other = [];

        const resLength = res.length;
        for (let i = 0; i < resLength; i++) {
          const realty: IRealtyEntity = res[i];
          if (realty.operation_type === 'Аренда') {
            realty.date = moment(realty.date).format('LL');
            rent.push({
              name: `${realty.name}\t\t${realty.cost}${realty.currency}`,
              children: [realty],
            });
          } else if (realty.operation_type === 'Продажа') {
            realty.date = moment(realty.date).format('LL');
            forSale.push({
              name: `${realty.name}\t\t${realty.cost}${realty.currency}`,
              children: [realty],
            });
          } else {
            realty.date = moment(realty.date).format('LL');
            other.push({
              name: `${realty.name}\t\t${realty.cost}${realty.currency}`,
              children: [realty],
            });
          }
        }
        this.dataSource.data = [
          {
            name: 'Аренда',
            children: rent,
          },
          {
            name: 'Продажа',
            children: forSale,
          },
          {
            name: 'Другое',
            children: other,
          },
        ];
      },
      (e) => console.log(e)
    );
  }
}
