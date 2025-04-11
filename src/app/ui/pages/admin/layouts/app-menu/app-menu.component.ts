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
        ],
        label: '',
      },
      {
        items: [
          {
            icon: 'pi pi-chart-bar',
            label: 'Panel de control',
            routerLink: ['/'],
          },
        ],
        label: '',
      },
      {
        icon: 'pi pi-fw pi-cog',
        items: [
          {
            icon: 'pi pi-fw pi-users',
            items: [
              {
                icon: 'pi pi-fw pi-id-card',
                label: 'Catálogo de usuarios',
                routerLink: ['/'],
              },
              {
                icon: 'pi pi-fw pi-key',
                label: 'Roles de usuario',
                routerLink: ['/'],
              },
            ],
            label: 'Usuarios y roles',
          },
        ],
        label: 'Administración',
      },
    ];
  }
}
