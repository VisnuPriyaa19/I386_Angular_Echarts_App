import { Component } from '@angular/core';
import { TitleComponent } from './title/title.component';
import { ChartComponent } from './components/chart/chart.component';

@Component({
  selector: 'app-root',
  imports: [TitleComponent, ChartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Echarts-App';
}
