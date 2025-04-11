import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardControlComponent } from './pages/inicio/components/dashboard-control/dashboard-control.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    children: [
      {
        component: DashboardControlComponent, // Carga el Dashboard cuando el usuario accede a /admin
        path: '',
        title: 'Test Cajero | Dashboard',
      },
      {
        loadChildren: async () => {
          const m: any = await import(
            './pages/operaciones/consultar-saldo/consultar-saldo.module'
          );
          return m.ConsultarSaldoModule;
        },
        path: 'operaciones/consultar-saldo',
        title: 'Test Cajero | Operaciones',
      },
      {
        loadChildren: async () => {
          const m: any = await import(
            './pages/operaciones/depositar-efectivo/depositar-efectivo.module'
          );
          return m.DepositarEfectivoModule;
        },
        path: 'operaciones/depositar-efectivo',
        title: 'Test Cajero | Operaciones',
      },
      {
        loadChildren: async () => {
          const m: any = await import(
            './pages/operaciones/retirar-efectivo/retirar-efectivo.module'
          );
          return m.RetirarEfectivoModule;
        },
        path: 'operaciones/retirar-efectivo',
        title: 'Test Cajero | Operaciones',
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
