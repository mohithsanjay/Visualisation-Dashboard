import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { ChartsService } from '../charts.service';
import { ChartBaseComponent } from '../chart-base/chart-base.component';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent extends ChartBaseComponent {
  public constructor(public override service: ChartsService) {
    super(service);
  }

  override createChart(labeldata: any, realdata: any) {
    this.chart = new Chart('MyChart', {
      type: 'line', //this denotes tha type of chart
      data: {
        labels: labeldata,
        datasets: [
          {
            label: '',
            data: realdata,
            //backgroundColor: colordata,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
          },
        ],
      },
     
    });
  }
}
