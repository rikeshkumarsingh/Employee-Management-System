import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employ } from './employ';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 
  private baseUrl='http://localhost:8080/api/v1/employ';
  
  constructor(private httpclient:HttpClient) { }

  getEmployList():Observable<Employ[]>{
  return this.httpclient.get<Employ[]>(`${this.baseUrl}`);
  }
  getEmployee(id: number): Observable<Employ> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpclient.get<Employ>(url);
  }

  addEmploy(employ: Employ): Observable<Employ> {
    return this.httpclient.post<Employ>(this.baseUrl, employ);
  }

  updateEmploy(employ: Employ): Observable<Employ> {
    const url = `${this.baseUrl}/${employ.id}`;
    return this.httpclient.put<Employ>(url, employ);
  }

  deleteEmploy(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpclient.delete(url);
  }

  }
