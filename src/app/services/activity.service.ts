import { Injectable } from '@angular/core';
import {AuthenticatedHttp} from "./authenticated-http.service";

@Injectable()
export class ActivityService {

  constructor(private http: AuthenticatedHttp) { }

  getActivity() {
    return this.http.get('activities')
  }

}
