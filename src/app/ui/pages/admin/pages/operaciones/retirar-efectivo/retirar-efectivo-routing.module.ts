import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RetirarEfectivoComponent } from './retirar-efectivo-control/retirar-efectivo.component';

const routes: Routes = [
  {
    component: RetirarEfectivoComponent,
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
export class RetirarEfectivoRoutingModule {}
