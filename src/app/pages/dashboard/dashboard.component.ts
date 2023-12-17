import {Component, OnInit} from '@angular/core';
import {User} from "../../interfaces";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user?: User;

  constructor(private userService: UserService, private router: Router) {
    this.user = this.userService.getCurrentUser();
    console.log(this.user)
  }

  ngOnInit(): void {
    if (!this.user){
      this.router.navigate(["/login"]);
    }
  }


}
