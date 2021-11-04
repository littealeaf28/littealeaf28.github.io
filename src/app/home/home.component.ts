import { Component, OnInit } from '@angular/core';
import {AngularFireAnalytics} from '@angular/fire/analytics';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(analytics: AngularFireAnalytics) {
    analytics.logEvent('home_visited');
  }

  ngOnInit(): void {
  }

}
