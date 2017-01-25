import {Component, OnInit, Input} from '@angular/core';
import {CommentsService} from "../services/comments.service";

@Component({
  selector: 'comment-feed',
  templateUrl: './comment-feed.component.html',
  styleUrls: ['./comment-feed.component.css']
})
export class CommentFeedComponent implements OnInit {

  @Input() parent;

  constructor(private comments: CommentsService) { }

  createComment(body) {
    this.comments.createComment(this.parent.type, this.parent.id, body).subscribe(comment => {
      this.parent.comments.push(comment.json().data)
    })
  }

  ngOnInit() {
    if(!this.parent.comments)
      this.comments.getComments(this.parent.type, this.parent.id).subscribe(
          comments => this.parent.comments = comments.json().data
      )
  }

}
