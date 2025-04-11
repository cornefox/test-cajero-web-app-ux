import { CommonModule } from '@angular/common';
import { ConsultarSaldoComponent } from './consultar-saldo-control/consultar-saldo.component';
import { ConsultarSaldoRoutingModule } from './consultar-saldo-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [ConsultarSaldoComponent],
  imports: [CommonModule, ConsultarSaldoRoutingModule],
})
export class ConsultarSaldoModule {}
