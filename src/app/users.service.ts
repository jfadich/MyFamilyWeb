import { Injectable } from '@angular/core';
import {AuthenticatedHttp} from "./authenticated-http.service";

@Injectable()
export class UsersService {

  constructor(private http: AuthenticatedHttp) { }

  getUser(id) {
    return this.http.get('users/' + id)
  }

}
