import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Price, Product} from "../../interfaces";
import {ChartDataset, ChartOptions, ChartType, Chart, ChartConfiguration, ChartEvent,} from 'chart.js';
import {DatePipe} from "@angular/common";
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-price-history-chart',
  templateUrl: './price-history-chart.component.html',
  styleUrls: ['./price-history-chart.component.scss']
})
export class PriceHistoryChartComponent implements OnInit {

  @Input() products!: Product[];
  chainsList!: string[];
  chainsFormControl = new FormControl('');
  priceChartData: { chain: string, priceData: ChartConfiguration['data'] }[] = [];

  constructor(private datePipe: DatePipe) {
  }

  ngOnInit(): void {

    this.chainsList = this.products.map(p => p.chain.name);
    this.generateDatasets(this.products);
    // this.chainsFormControl.setValue(this.chainsList[0]);

    this.chainsFormControl.valueChanges
      .subscribe(selectedChain => {
        if (selectedChain !== null) {
          let updatedData = this.priceChartData.find(d => d.chain === selectedChain)?.priceData;
          if (updatedData) {
            this.lineChartData = updatedData;
          }
        }
      })
  }

  public generateDatasets(products: Product[]) {

    for (let product of products) {

      let backgroundColor = "";
      let borderColor = "";
      let pointBackgroundColor = "";
      switch (product.chain.name) {
        case "auchan":
          backgroundColor = "rgba(246, 246, 246, 1)";
          borderColor = "rgba(219, 58, 52, 1)";
          pointBackgroundColor = "rgba(219, 58, 52, 1)";
          break;
        case "continente":
          backgroundColor = "rgba(219, 58, 52, 0.1)";
          borderColor = "rgba(219, 58, 52, 1)";
          pointBackgroundColor = "rgba(219, 58, 52, 1)";
          break;
        case "intermarché":
          backgroundColor = "rgb(255,255,255,1)";
          borderColor = "rgba(0, 0, 0, 1)";
          pointBackgroundColor = "rgba(219, 58, 52, 1)";
          break;
        case "minipreço":
          backgroundColor = "rgba(21, 101, 192, 0.2)";
          borderColor = "rgba(21, 101, 192, 1)";
          pointBackgroundColor = "rgba(219, 58, 52, 1)";
          break;
        case "pingo doce":
          backgroundColor = "rgba(119, 184, 34, 0.2)";
          borderColor = "rgba(119, 184, 34, 1)";
          pointBackgroundColor = "rgba(0, 0, 0, 1)";
          break;
      }

      let chain = product.chain.name;


      let priceData: ChartConfiguration['data'] = {
        datasets: [
          {
            data: product.prices.map(price => price.primaryValue),
            label: 'Preço'/*product.chain.name*/,
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            pointBackgroundColor: pointBackgroundColor,
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)',
            fill: 'origin',
          }
        ],
        labels: product.prices.map(price => this.datePipe.transform(price.collectionDate, 'dd/MM/yy', undefined, 'pt'))
      }
      this.priceChartData.push({priceData, chain});
    }

  }

  public lineChartData?: ChartConfiguration['data'];

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


}
