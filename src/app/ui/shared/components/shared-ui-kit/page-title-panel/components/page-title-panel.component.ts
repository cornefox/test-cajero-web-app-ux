import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-page-title-panel',
  standalone: false,
  styleUrl: './page-title-panel.component.scss',
  templateUrl: './page-title-panel.component.html',
})
export class PageTitlePanelComponent implements OnInit {
  @Input() public title: string = '';
  @Input() public subtitle: string = '';
  @Input() public primaryButtonLabel: string = '';
  @Input() public secondaryButtonLabel: string = '';
  @Input() public primaryButtonIcon: string = 'pi pi-plus'; // Agregado para el ícono primario
  @Input() public secondaryButtonIcon: string = 'pi pi-arrow-left'; // Agregado para el ícono secundario

  @Output() public primaryButtonClick: EventEmitter<void> =
    new EventEmitter<void>();
  @Output() public secondaryButtonClick: EventEmitter<void> =
    new EventEmitter<void>();

  public items: MenuItem[] = [];

  public loading: boolean[] = [false, false, false, false];

  public ngOnInit(): void {
    this.items = [
      { icon: 'pi pi-refresh', label: 'Update' },
      { icon: 'pi pi-times', label: 'Delete' },
      { icon: 'pi pi-info', label: 'Angular.io', url: 'http://angular.io' },
      { separator: true },
      { icon: 'pi pi-cog', label: 'Setup' },
    ];
  }

  public load(index: number): void {
    this.loading[index] = true;
    setTimeout(() => (this.loading[index] = false), 1000);
  }
}
