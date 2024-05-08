import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ChartBaseComponent } from '../charts/chart-base/chart-base.component';
import { ChartsService } from '../charts/charts.service';
import { response } from 'express';
@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent extends ChartBaseComponent implements OnInit {
  public thetopics:any[]=[];
  public constructor(public override service: ChartsService) {
    super(service);
  }

  override ngOnInit(): void {
    this.service.getChartInfo().subscribe(
      (response)=>{
        this.thetopics=this.topics;
      },
    (error) => {
      console.error("Error fetching chart info:", error);
    }
  );
  }



}
