import { RouterModule, Routes } from '@angular/router';
import { ConsultarSaldoComponent } from './consultar-saldo-control/consultar-saldo.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    component: ConsultarSaldoComponent,
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
export class ConsultarSaldoRoutingModule {}
