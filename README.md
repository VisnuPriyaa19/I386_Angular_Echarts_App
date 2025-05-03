# Angular Fundamentals and Data Visualization using Echarts

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.7.
This project involves building an Angular application that integrates ECharts to visualize data. 

## Project Setup and Echarts Integration

1. Created a new Angular appliaction<br>
```bash
ng new Angular-Echarts-App
```

2. Installed Echarts using npm<br>
```bash
npm install echarts ngx-echarts
```

3. Generated two components using Angular CLI<br>
```bash
ng generate component components/title  
ng generate component components/chart
```
  - TitleComponent - Displays the title and a brief description of the application.
  - ChartComponent - Renders the ECharts data visualization.

4. Created a service for storing and injecting sample chart data<br>
```bash
ng generate service services/chart-data
```

5. Manually created a model file in the models/ folder to define and export a data interface used by the application.

6. Integrated ECharts into Angular<br>
  - Imported ECharts in ChartComponent.
  - Used Angular lifecycle hook AfterViewInit to initialize the chart.
  - Configured the chart with sample data, chart type, and styling options.

## Components and their functionality

1. Title Component<br>
      - Displays the application title and a brief description.
      - Utilizes Angular data binding ({{ }}) to dynamically render content.
      - Acts as a simple header component for user context.
2. Chart Component<br>
      - Renders the ECharts visualization inside a container element.
      - Initializes the chart using Angular’s AfterViewInit lifecycle hook.
      - Accepts data from a shared service and configures the chart dynamically.
      - Provides a dropdown menu allowing users to switch between different chart types:
            - Bar Chart
            - Doughnut Chart
            - Step Line Chart
      - Updates the chart configuration and view instantly based on the selected type.
      - Includes essential chart styling, labels, and axis settings for readability.

