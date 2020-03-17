import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-activity-video',
  templateUrl: './activity-video.page.html',
  styleUrls: ['./activity-video.page.scss'],
})
export class ActivityVideoPage implements OnInit {
  videoURL: string;
  constructor(private modalController: ModalController,
    private navparams: NavParams) { }

  ngOnInit() {
    this.videoURL = this.navparams.get('videoURL');
    console.log(this.videoURL);
  }

  closeModal() {
    this.modalController.dismiss();
  }
}
