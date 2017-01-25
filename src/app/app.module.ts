import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {UsersService} from "./services/users.service";
import {AuthenticatedHttp} from "./services/authenticated-http.service";
import { TopnavComponent } from './topnav/topnav.component';
import {ActivityService} from "./services/activity.service";
import { ActivityFeedComponent } from './activity-feed/activity-feed.component';
import {CommentsService} from "./services/comments.service";
import { CommentFeedComponent } from './comment-feed/comment-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TopnavComponent,
    ActivityFeedComponent,
    CommentFeedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UsersService, AuthenticatedHttp, ActivityService, CommentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
