import { CommonModule } from '@angular/common';
import { DepositarEfectivoComponent } from './depositar-efectivo-control/depositar-efectivo.component';
import { DepositarEfectivoRoutingModule } from './depositar-efectivo-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [DepositarEfectivoComponent],
  imports: [CommonModule, DepositarEfectivoRoutingModule],
})
export class DepositarEfectivoModule {}
