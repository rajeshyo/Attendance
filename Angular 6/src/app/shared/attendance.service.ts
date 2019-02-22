import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Attendance } from './attendance.model';
@Injectable({
  providedIn: 'root'
})

export class AttendanceService {
  selectAttendance: Attendance ={
    f_name: "",
    l_name: "",
    position: "",
    phone: "",
    email: ""
  };

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }

  //HttpMethods

  getEmployeeDetails() {
    return this.http.get(environment.appurl + 'posts');
    
  }
}