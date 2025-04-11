import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skeleton-chart',
  standalone: false,
  styleUrls: ['./skeleton-chart.component.scss'],
  templateUrl: './skeleton-chart.component.html',
})
export class SkeletonChartComponent {
  @Input() public visible: boolean = false;
}
