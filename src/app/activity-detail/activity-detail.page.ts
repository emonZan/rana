import { Component, OnInit, ɵConsole } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../types';
import { ActivityService } from '../activity.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.page.html',
  styleUrls: ['./activity-detail.page.scss'],
})
export class ActivityDetailPage implements OnInit {
  activityDetail: Activity;

  constructor(
    private activityService: ActivityService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    const activityID = this.activatedRoute.snapshot.params['activityID'];
    this.activityService.getActivity(activityID).subscribe(data => {
      this.activityDetail = data;
      console.log(this.activityDetail);
    });
  }

}

