import {Component, OnInit} from '@angular/core';
import {UsersService} from "./users.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  currentUser = {};

  constructor (private users: UsersService) {
  }


  ngOnInit() {

    this.users.getUser('~').subscribe(user => this.currentUser = user.json().data);

  }

}
