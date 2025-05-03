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




## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
