import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [DashboardService]
})
export class DashboardComponent implements OnInit {

  constructor(private dashboardServiceService: DashboardService) { }

  ngOnInit() {
  }
 
}
