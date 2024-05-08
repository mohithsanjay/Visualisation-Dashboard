import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { DoughnutChartComponent } from './charts/doughnut-chart/doughnut-chart.component';
import { TopicsComponent } from './topics/topics.component';

const routes: Routes = [
  {path: "bar", component: BarChartComponent},
  {path: "line", component: LineChartComponent},
  {path: "pie", component: PieChartComponent},
  {path: "doughnut", component: DoughnutChartComponent},
  {path:"topics", component: TopicsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
