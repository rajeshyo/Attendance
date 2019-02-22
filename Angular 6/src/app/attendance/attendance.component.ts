import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../shared/attendance.service';
import { UserService } from '../shared/user.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  attendancedetails;
  constructor(private attendance: AttendanceService, private user:UserService, private router: Router) { }

  ngOnInit() {
   
    this.attendance.getEmployeeDetails().subscribe(
      res => {
        console.log(this.attendancedetails);
       
        this.attendancedetails = res['post'];
      
      },
      err => { 
        console.log(err);
        
      }
    );
  }
  
  onLogout(){
    this.user.deleteToken();
    this.router.navigate(['/login']);
  }
}
