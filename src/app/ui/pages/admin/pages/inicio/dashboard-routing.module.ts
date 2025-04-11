import { RouterModule, Routes } from '@angular/router';
import { DashboardControlComponent } from './components/dashboard-control/dashboard-control.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    component: DashboardControlComponent,
    path: 'dashboard',
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class DashboardRoutingModule {}
