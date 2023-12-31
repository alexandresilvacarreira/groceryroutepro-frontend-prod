import {Component, OnInit} from '@angular/core';
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'groceryroutepro-angular-frontend';

  constructor(private userService:UserService) {
  }

  ngOnInit(): void {
    // Obter o utilizador caso já haja um autenticado em sessão; caso contrário, limpar localStorage, para impedir
    // navegação no frontend sem autenticação
    // this.userService.getAuthenticatedUser().subscribe(response => {
    //   if (response.user){
    //     this.userService.setCurrentUser(response.user);
    //   } else {
    //     this.userService.clearCurrentUser();
    //   }
    // })
  }




}
