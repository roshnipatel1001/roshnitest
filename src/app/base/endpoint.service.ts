import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EndpointService {

  constructor(
    private http: HttpClient,
  ) { }

  /**
 * get list
 */
  getList(): any {
    const api = 'https://reqres.in/api/users'
    return this.http.get(api).pipe(
      catchError((err) => {
        return of({ message: 'something went wrong' })
      })
    )
  }
  /**
* create new
*/
  createNew(data: any): any {
    const formData = new FormData();
    formData.append('name', data.frist_name);
    formData.append('job', data.last_name);

    const api = 'https://reqres.in/api/users'
    return this.http.post(api, formData).pipe(
      catchError((err) => {
        return of({ message: 'something went wrong ' })
      })
    )
  }
}
