import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  postData (data:any) {
    return this.http.post<any>("https://mockserver-3q9t.onrender.com/expensedata", data)
  }
  getData () {
    return this.http.get<any>("https://mockserver-3q9t.onrender.com/expensedata")
  }
  deleteData (id:number) {
    return this.http.delete<any>("https://mockserver-3q9t.onrender.com/expensedata" +id)
  }

  putData( data: any , id : number) {
    return this.http.put<any>("https://mockserver-3q9t.onrender.com/expensedata" +id , data)
  }
}
