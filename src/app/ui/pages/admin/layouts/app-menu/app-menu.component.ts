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
            routerLinkActiveOptions: { exact: false },
          },
          {
            icon: 'pi pi-wallet',
            label: 'Consultar saldo',
            routerLink: ['/saldo'],
          },
          {
            icon: 'pi pi-arrow-down',
            label: 'Retirar efectivo',
            routerLink: ['/retiro'],
          },
          {
            icon: 'pi pi-arrow-up',
            label: 'Depositar efectivo',
            routerLink: ['/deposito'],
          },
        ],
        label: 'Operaciones',
      },
    ];
  }
}
