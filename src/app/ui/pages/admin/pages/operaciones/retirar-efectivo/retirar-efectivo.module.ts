import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RetirarEfectivoComponent } from './retirar-efectivo-control/retirar-efectivo.component';
import { RetirarEfectivoRoutingModule } from './retirar-efectivo-routing.module';

@NgModule({
  declarations: [RetirarEfectivoComponent],
  imports: [CommonModule, RetirarEfectivoRoutingModule],
})
export class RetirarEfectivoModule {}
