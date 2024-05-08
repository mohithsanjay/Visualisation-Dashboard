import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { ChartsService } from '../charts.service';
import { ChartBaseComponent } from '../chart-base/chart-base.component';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent extends ChartBaseComponent {
  
  public constructor(public override service: ChartsService) {
    super(service);
  }

  override createChart(labeldata: any, realdata: any) {
    this.chart = new Chart('MyChart', {
      type: 'bar', //this denotes tha type of chart
      data: {
        // values on X-Axis
        labels: labeldata,
        datasets: [
          {
            label: 'Intensity',
            data: realdata,
            //backgroundColor: colordata,
            barThickness: 20,
          },
        ],
      },
      
    });
  }
  getRandomColor() {
    throw new Error('Method not implemented.');
  }
}
