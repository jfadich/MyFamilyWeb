import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user;
  @Input() showPicture = true;
  @Input() imageSize = 'small';

  constructor() {

  }

  ngOnInit() {
    console.log(this.user);
  }

}
