import { IRetirarEfectivoRepository } from '../../domain/retirar-efectivo/repositories/retirar-efectivo.repository';
import { InjectionToken } from '@angular/core';

export const IRetirarEfectivoProvider: InjectionToken<IRetirarEfectivoRepository> =
  new InjectionToken<IRetirarEfectivoRepository>('Retirar Efectivo Repository');
