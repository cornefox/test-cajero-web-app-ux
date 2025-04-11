import { RetirarEfectivoEntity } from '../entities/retirar-efectivo.entity';

export interface IRetirarEfectivoRepository {
  findAll(): Promise<RetirarEfectivoEntity[]>;
}
