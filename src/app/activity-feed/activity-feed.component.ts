import { Component, OnInit } from '@angular/core';
import {ActivityService} from "../services/activity.service";

@Component({
  selector: 'activity-feed',
  templateUrl: './activity-feed.component.html',
  styleUrls: ['./activity-feed.component.css']
})
export class ActivityFeedComponent implements OnInit {

  feed = [];

  constructor(private activities: ActivityService) { }

  ngOnInit() {
    this.activities.getActivity().subscribe(feed => this.feed = feed.json().data);
  }

}
