import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RetirarEfectivoComponent } from './retirar-efectivo-control/retirar-efectivo.component';
import { RetirarEfectivoRoutingModule } from './retirar-efectivo-routing.module';

@NgModule({
  declarations: [RetirarEfectivoComponent],
  imports: [
    CommonModule,
    RetirarEfectivoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class RetirarEfectivoModule {}
