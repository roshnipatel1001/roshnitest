import { Component, OnInit } from '@angular/core';
import { EndpointService } from '../endpoint.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listData: any = [];

  constructor(
    public endpoint: EndpointService
  ) { }

  ngOnInit(): void {
    this.endpoint.getList().subscribe((result: any) => {
      if (result) {
        console.log(result.data);
        this.listData = result.data
      }
    })
  }

  DeleteEmp(id: number) {
    // this.service.EmpDelete(id).subscribe((data: any[]) => {
    //   this.ListData = data;
    //   console.log(data)
    // });
  }
}
