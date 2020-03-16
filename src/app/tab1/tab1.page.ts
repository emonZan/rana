import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../activity.service';
import { Observable } from 'rxjs';
import { Activity } from '../types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  activityList: Observable<Activity[]>;
  constructor(private activityService: ActivityService,
    private router: Router) {
    this.activityList = this.activityService.getAllAcivities();

  }
  ngOnInit() {
  }

}
