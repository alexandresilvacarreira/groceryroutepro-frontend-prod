import {Component, Input} from '@angular/core';
import {Price} from "../../interfaces";
import {ChartDataset, ChartOptions, ChartType} from 'chart.js';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-price-history-chart',
  templateUrl: './price-history-chart.component.html',
  styleUrls: ['./price-history-chart.component.scss']
})
export class PriceHistoryChartComponent {

  @Input() prices!: Price[];


  constructor(private datePipe:DatePipe) {
  }

  public lineChartData: ChartDataset[] = [
    {data: [], label: 'Preço', backgroundColor: '#219EBC', borderColor: '#0F7293', pointBorderColor: '#0F7293', pointBackgroundColor: '#219EBC' },
  ];

  public lineChartLabels: (string | null)[] = [];


  public lineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Dia',
          // font: {
          //   family: 'Lato',
          //   size: 14
          // }
        },
        ticks: {
          // callback: (value) => {
          //   // Display formatted date (dd/MM/YY) on x-axis
          //   // let date = new Date(value);
          //   // return `${date.toLocaleDateString('pt', {day: '2-digit', month: '2-digit', year: '2-digit'})}`;
          //   return this.datePipe.transform(value, 'dd/MM/yy',undefined, 'pt');
          // },
          minRotation: 45,
          // font: {
          //   family: 'Lato',
          //   size: 14
          // }
        },
      },
      y: {
        title: {
          display: true,
          text: 'Preço (€)',
          // font: {
          //   family: 'Lato',
          //   size: 14
          // },
        },
      },
    },
  };


  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  ngOnChanges() {
    this.updateChartData();
  }

  private updateChartData() {
    this.lineChartData[0].data = this.prices.map(price => price.primaryValue);
    // this.lineChartLabels = this.prices.map(price => price.collectionDate);
    this.lineChartLabels = this.prices.map(price => this.datePipe.transform(price.collectionDate, 'dd/MM/yy',undefined, 'pt'));
  }

}
