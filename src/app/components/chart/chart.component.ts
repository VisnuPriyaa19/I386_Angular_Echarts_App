import { Component, inject, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { EChartsOption } from 'echarts';
import { ChartDataService } from '../../service/chart-data.service';
import * as echarts from 'echarts';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule, NgxEchartsModule],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent implements AfterViewInit {
  chartType: string = 'doughnut';
  chartOptions: EChartsOption = {};
  // gets data from service using inject
  dataService = inject(ChartDataService);
  // stores current chart instance
  chartInstance: any;
  ChartDescription: string = '';

  // AfterViewInit() - called after the view is fully loaded
  ngAfterViewInit() {
    this.updateChart();     // updateChart() - to draw default chart
  }

  // when user picks a new chart from dropdown this runs
  onChartTypeChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.chartType = selectElement.value;
    this.updateChart();
  }

  updateChart() {
    // finds HTML element <div id="salesChart"> to draw the chart in
    const chartDom = document.getElementById('salesChart');

    // clears the previous chart to avoid overlapping
    if (this.chartInstance) {
      this.chartInstance.dispose();
    }

    // initialize new chart instance
    // chartDom! - error handling[chartDom can have HTML Element or a null value][! - knows that it is not null or undefined, so dont throw error]
    this.chartInstance = echarts.init(chartDom!);    

    // Set chart options based on selected type
    if (this.chartType === 'doughnut') {
      this.ChartDescription = 'Sales by Region';
      const data = this.dataService.getSalesByRegion();
      this.chartOptions = {
        tooltip: { trigger: 'item' },
        series: [
          {
            type: 'pie',
            radius: ['40%', '70%'],
            data: data.map(d => ({ name: d.region, value: d.sales })),
            label: { formatter: '{b}: {c} ({d}%)' }
          }
        ]
      };
    } 
    
    else if (this.chartType === 'step-line') {
      this.ChartDescription = 'Monthly Sales Rate of Products';
      const data = this.dataService.getMonthlySales();
      this.chartOptions = {
        tooltip: { trigger: 'axis' },
        xAxis: { type: 'category', data: data.map(d => d.month) },
        yAxis: { type: 'value' },
        legend: {
          bottom: 0, // Legend at the bottom
          data: ['Dress', 'Cosmetics', 'Footwear']
        },
        series: [
          {
            name: 'Dress',
            type: 'line',
            step: 'middle',
            data: data.map(d => d.dress)
          },
          {
            name: 'Cosmetics',
            type: 'line',
            step: 'middle',
            data: data.map(d => d.cosmetics)
          },
          {
            name: 'Footwear',
            type: 'line',
            step: 'middle',
            data: data.map(d => d.footwear)
          }
        ]
      };
    } 
    
    else if (this.chartType === 'bar') {
      this.ChartDescription = 'Overall Product Sales';
      const data = this.dataService.getProductSales();
      this.chartOptions = {
        tooltip: { trigger: 'axis' },
        xAxis: { type: 'category', data: data.map(d => d.product) },
        yAxis: { type: 'value' },
        series: [
          {
            type: 'bar',
            data: data.map(d => d.sales),
            itemStyle: { color: '#91cc75' }
          }
        ]
      };
    }

    // Displays chart on screen
    this.chartInstance.setOption(this.chartOptions);
  }
}
