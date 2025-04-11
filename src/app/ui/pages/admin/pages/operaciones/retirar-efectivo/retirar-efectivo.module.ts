import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IRetirarEfectivoProvider } from 'src/app/core/application/providers';
import { NgModule } from '@angular/core';
import { RetirarEfectivoAppModule } from 'src/app/core/application/retirar-efectivo/retirar-efectivo-app.module';
import { RetirarEfectivoComponent } from './retirar-efectivo-control/retirar-efectivo.component';
import { RetirarEfectivoRepository } from 'src/app/core/api/repositories/retirar-efectivo.repository';
import { RetirarEfectivoRoutingModule } from './retirar-efectivo-routing.module';

@NgModule({
  declarations: [RetirarEfectivoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RetirarEfectivoAppModule,
    RetirarEfectivoRoutingModule,
  ],
  providers: [
    {
      provide: IRetirarEfectivoProvider,
      useClass: RetirarEfectivoRepository,
    },
  ],
})
export class RetirarEfectivoModule {}
