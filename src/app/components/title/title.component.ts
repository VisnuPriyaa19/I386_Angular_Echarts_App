import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent {
  title : string = 'Angular Echarts App'
  description : string = 'A simple app demonstrating Angular and Echarts features'
}
