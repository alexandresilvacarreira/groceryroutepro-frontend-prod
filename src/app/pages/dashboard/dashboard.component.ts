import {Component, OnInit} from '@angular/core';
import {User} from "../../interfaces";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {lastValueFrom} from "rxjs";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    // this.user = this.userService.getCurrentUser();
    // if (!this.user){
    //   this.router.navigate(["/login"]);
    // }
  }

  isUser(obj: any): obj is User {
    return obj !== false && obj !== null && typeof obj === 'object' && 'name' in obj;
  }

}
