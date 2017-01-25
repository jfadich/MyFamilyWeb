import { Injectable } from '@angular/core';
import {AuthenticatedHttp} from "./authenticated-http.service";

@Injectable()
export class CommentsService {

  constructor(private http: AuthenticatedHttp) { }

  getComments(type, id) {
    return this.http.get(`comments/${type}/${id}?with=owner`)
  }

  createComment(type, id, body) {
    return this.http.post(`comments?with=owner`,{
      parent_type: type,
      parent_id: id,
      body: body
    })
  }

}
