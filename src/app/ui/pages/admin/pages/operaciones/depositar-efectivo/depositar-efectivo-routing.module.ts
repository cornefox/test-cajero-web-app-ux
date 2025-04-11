import { RouterModule, Routes } from '@angular/router';
import { DepositarEfectivoComponent } from './depositar-efectivo-control/depositar-efectivo.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    component: DepositarEfectivoComponent,
    path: 'control',
  },
  {
    path: '**',
    redirectTo: 'control',
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class DepositarEfectivoRoutingModule {}
