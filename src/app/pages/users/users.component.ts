import {Component, OnInit} from '@angular/core';
import {ApiConnectionService} from '../../API/api-connection.service';

export interface ITableData {
  id: number;
  name: number;
  symbol: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'symbol'];
  dataSource: ITableData[];

  constructor(private apiConnection: ApiConnectionService) {}

  ngOnInit(): void {
    this.apiConnection.get('/user').subscribe(
      (res: []) => {
        this.dataSource = res.reduce(function (filtered, user: any) {
          if (user.name) {
            filtered.push({
              id: user.id,
              name: user.name,
              symbol: user.id + user.name[0],
            });
          }
          return filtered;
        }, []);
      },
      (e) => console.log(e)
    );
  }
}
