import { Component, Input } from '@angular/core';
import { PrimeColumnTable } from '../../../interfaces/prime-column-table';

@Component({
  selector: 'app-skeleton-table',
  standalone: false,
  styleUrl: './skeleton-table.component.scss',
  templateUrl: './skeleton-table.component.html',
})
export class SkeletonTableComponent {
  @Input() public visible: boolean = false;
  @Input() public headers!: PrimeColumnTable[];
  public items: string[] = Array.from({ length: 5 }).map(
    (_, i) => `Item #${i}`,
  );
}
