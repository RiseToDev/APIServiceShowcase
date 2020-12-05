import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from '../../services/api-connection.service';

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

  MOCK_USER_DATA = `[{"id":1,"name":"admin"},{"id":13,"name":"Doe"},{"id":21,"name":"Василий"},{"id":22,"name":"Василий3"},{"id":23,"name":"Василий12"},{"id":24,"name":"123"},{"id":25,"name":"Василий3"},{"id":30,"name":"Василий3"},{"id":33,"name":"Василий121"},{"id":34,"name":"Сергей"},{"id":35,"name":"Василий"},{"id":37,"name":"Василий32"},{"id":39,"name":"Doe"},{"id":41,"name":"Doe3"},{"id":42,"name":"Doe3"},{"id":43,"name":"Doe3"},{"id":44,"name":"Doe3"},{"id":45,"name":"Doe3"},{"id":46,"name":"Doe3"},{"id":47,"name":"Doe3"},{"id":48,"name":"Doe3"},{"id":49,"name":"Doe3"},{"id":51,"name":"Doe3"},{"id":52,"name":"Doe3"},{"id":53,"name":"Doe3"},{"id":54,"name":"Doe3"},{"id":55,"name":"Doe3"},{"id":56,"name":"Doe3"},{"id":57,"name":"Doe3"},{"id":58,"name":"Doe3"},{"id":59,"name":"43234"},{"id":60,"name":"33"},{"id":61,"name":"23432"},{"id":62,"name":"23432"},{"id":63,"name":"213"},{"id":64,"name":"42234"},{"id":65,"name":"111"},{"id":66,"name":"432432"},{"id":67,"name":"3213"},{"id":68,"name":"312"},{"id":69,"name":"312"},{"id":70,"name":"3333"},{"id":71,"name":"3333"},{"id":72,"name":"45"},{"id":73,"name":"45"},{"id":74,"name":"3214"},{"id":75,"name":"231"},{"id":76,"name":"21"},{"id":77,"name":"53543"},{"id":78,"name":"53543"},{"id":79,"name":null},{"id":80,"name":null},{"id":81,"name":null},{"id":82,"name":null},{"id":83,"name":null},{"id":84,"name":null},{"id":85,"name":null},{"id":86,"name":null},{"id":87,"name":"{'name' : 'entity_name'}"},{"id":88,"name":null},{"id":89,"name":null},{"id":90,"name":null},{"id":91,"name":null},{"id":92,"name":null},{"id":93,"name":null},{"id":94,"name":null},{"id":95,"name":null},{"id":96,"name":null},{"id":97,"name":null},{"id":98,"name":"entity_name"},{"id":99,"name":"entity_name"},{"id":100,"name":"entity_name"},{"id":101,"name":"fsdgsdg"},{"id":102,"name":"dfhdjdj"},{"id":103,"name":"fdfffffffffffffffffff"},{"id":104,"name":"fdfffffffffffffffffff"}]`;

  constructor(private apiConnection: ApiConnectionService) {}

  prepareUserData = (array: []): ITableData[] =>
    array.reduce((filtered, user: any) => {
      if (!!user.name) {
        filtered.push({
          id: user.id,
          name: user.name,
          symbol: user.id + user.name[0].toLocaleUpperCase(),
        });
      }
      return filtered;
    }, [])

  ngOnInit(): void {
    this.apiConnection.get('/user').subscribe(
      (res: []) => (this.dataSource = this.prepareUserData(res)),
      (e) =>
        (this.dataSource = this.prepareUserData(
          JSON.parse(this.MOCK_USER_DATA)
        ))
    );
  }
}
