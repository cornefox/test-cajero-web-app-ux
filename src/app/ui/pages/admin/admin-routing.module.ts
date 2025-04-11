import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardControlComponent } from './pages/inicio/dashboard-control/dashboard-control.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    children: [
      {
        component: DashboardControlComponent, // Carga el Dashboard cuando el usuario accede a /admin
        path: '',
        title: 'Test Cajero | Dashboard',
      },
    ],
    component: AdminLayoutComponent,
    path: '',
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class AdminRoutingModule {}
