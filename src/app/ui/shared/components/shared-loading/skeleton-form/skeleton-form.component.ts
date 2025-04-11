import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skeleton-form',
  standalone: false,
  styleUrl: './skeleton-form.component.scss',
  templateUrl: './skeleton-form.component.html',
})
export class SkeletonFormComponent {
  @Input() public visible: boolean = false;
}
