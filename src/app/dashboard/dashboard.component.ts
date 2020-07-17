import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users: any[] = []

  constructor(protected userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser1()
    .subscribe(
      (data) => { //Sucess
        console.log(data)
        this.users = data['results']
      },
      (error) => {
        console.error(error)
      }
    )
  }

}
