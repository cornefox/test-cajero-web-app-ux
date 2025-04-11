import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RetirarEfectivoFindService } from './use-cases/retirar-efectivo-find.service';

@NgModule({
  declarations: [],
  exports: [],
  imports: [CommonModule],
  providers: [RetirarEfectivoFindService],
})
export class RetirarEfectivoAppModule {}
