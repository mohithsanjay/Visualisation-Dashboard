import { Component, OnInit } from '@angular/core';
import { ChartsService } from '../charts.service';

@Component({
  selector: 'app-chart-base',
  templateUrl: './chart-base.component.html',
  styleUrls: ['./chart-base.component.css'],
})
export class ChartBaseComponent implements OnInit {
  public chart: any;
  private chartInfo: any;
  private labeldata: any[] = [];
  private realdata: any[] = [];
  private colordata: any[] = [];


  private end_year: any[]=[];
  private intensity: any[]=[];
  public topics: any[]=[];
  private likelihood: any[]=[];
  private relevance: any[]=[];

  constructor(public service: ChartsService) {}

  ngOnInit(): void {
    this.service.getChartInfo().subscribe((response) => {
      this.chartInfo = response;
      if (this.chartInfo != null) {
        for (let i = 0; i < 50; i++) {
          this.end_year.push(this.chartInfo[i].end_year);
          this.intensity.push(this.chartInfo[i].intensity);
          this.topics.push(this.chartInfo[i].topics);
          this.likelihood.push(this.chartInfo[i].likelihood);
          this.relevance.push(this.chartInfo[i].relevance);
        }
        this.createChart(this.topics, this.intensity);
      }
    });
  }

  createChart(topics: any, likelihood: any) {}
}
