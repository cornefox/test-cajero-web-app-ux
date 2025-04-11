import { RetirarEfectivoDTO } from '../dtos/retirar-efectivo.dto';
import { RetirarEfectivoEntity } from '../../domain/retirar-efectivo/entities/retirar-efectivo.entity';

export class RetirarEfectivoMapper {
  public static toDomainEntity(
    retirarEfectivoModel: RetirarEfectivoDTO,
  ): RetirarEfectivoEntity {
    return new RetirarEfectivoEntity(
      retirarEfectivoModel.denominacion,
      retirarEfectivoModel.cantidadDisponible,
      retirarEfectivoModel.tipo,
    );
  }

  public static toDomainEntityArray(
    retirarEfectivoModel: any[],
  ): RetirarEfectivoEntity[] {
    return retirarEfectivoModel.map((value) =>
      RetirarEfectivoMapper.toDomainEntity(value),
    );
  }
}
