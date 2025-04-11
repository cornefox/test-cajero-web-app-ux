import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  standalone: false,
  styleUrl: './app-menu.component.scss',
  templateUrl: './app-menu.component.html',
})
export class AppMenuComponent implements OnInit {
  public model: MenuItem[] = [];

  public ngOnInit(): void {
    this.model = [
      {
        items: [
          {
            icon: 'pi pi-fw pi-home',
            label: 'Inicio',
            routerLink: ['/admin'],
          },
          {
            icon: 'pi pi-wallet',
            label: 'Consultar saldo',
            routerLink: ['operaciones/consultar-saldo'],
            routerLinkActiveOptions: { exact: false },
          },
          {
            icon: 'pi pi-arrow-down',
            label: 'Retirar efectivo',
            routerLink: ['operaciones/retirar-efectivo'],
            routerLinkActiveOptions: { exact: false },
          },
          {
            icon: 'pi pi-arrow-up',
            label: 'Depositar efectivo',
            routerLink: ['operaciones/depositar-efectivo'],
            routerLinkActiveOptions: { exact: false },
          },
        ],
        label: 'Operaciones',
      },
    ];
  }
}
