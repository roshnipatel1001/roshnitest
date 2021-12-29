import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 constructor(private http: HttpClient) {}
  users: any = [];
  todos:any=[]
  selectedUser: any;
  ngOnInit() {
    this.getusers();
  }
  getusers() {
    this.http
      .get("https://jsonplaceholder.typicode.com/users")
      .subscribe((res: any) => {
        console.log(res);
        this.users=res
        console.log(this.users);
      });
  }
  selectUser(event:any){
    console.log(event.target.value)
    https://jsonplaceholder.typicode.com/users/{userId}/todos
     this.http
      .get(" https://jsonplaceholder.typicode.com/users/" + event.target.value + "/todos")
      .subscribe((res: any) => {
        console.log(res);
        this.todos=res       
      });
  }
  changeStatus(evt:any, i:any)
  {
  if(evt){
    this.todos[i].completed=true
  }else{
    this.todos[i].completed=false
  }
  }

}
