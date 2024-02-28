import { Injectable } from '@angular/core';
import { formModel } from '../models/form.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private apiUrl = 'http://localhost:3000/user';
  constructor(private http:HttpClient) { }

  postDataToServer(data: formModel[]): Observable<any> {
    const endpoint = `${this.apiUrl}`;
    return this.http.post<any>(endpoint, { data });
  }

  getDataFromServer():Observable<any>{
     return this.http.get(`${this.apiUrl}`);
  }
  
  deleteItemById(itemId: number): Observable<any> {
    const url = `${this.apiUrl}/${itemId}`;
    return this.http.delete(url);
  }

  getUserDataById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url);
  }

  updateUser(user: any,id:number): Observable<any> {
    const updateUserUrl = `${this.apiUrl}/${id}`;
    return this.http.patch(updateUserUrl, user);
  }
}
