import {Component, Input} from '@angular/core';

@Component({
  selector: 'top-nav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})

export class TopnavComponent {

  @Input() user = {};

  constructor() {
  }

  logout() {
    localStorage.removeItem('token');
    location.href = '/';
  }

}
