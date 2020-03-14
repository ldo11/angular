import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../service/admin.service';
import {User} from '../../model/user';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: Array<User>;
  constructor(
    private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getalluser().then((Users: Array<User>) => {
      console.dir(Users);
      this.users = Users;
    })
  }

}
