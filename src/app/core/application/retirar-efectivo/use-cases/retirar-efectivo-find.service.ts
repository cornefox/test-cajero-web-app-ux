import { Inject, Injectable } from '@angular/core';
import { IRetirarEfectivoProvider } from '../../providers';
import { IRetirarEfectivoRepository } from 'src/app/core/domain/retirar-efectivo/repositories/retirar-efectivo.repository';
import { RetirarEfectivoEntity } from 'src/app/core/domain/retirar-efectivo/entities/retirar-efectivo.entity';

@Injectable()
export class RetirarEfectivoFindService {
  constructor(
    @Inject(IRetirarEfectivoProvider)
    private RetirarEfectivoRepository: IRetirarEfectivoRepository,
  ) {}

  public async findAll(): Promise<RetirarEfectivoEntity[]> {
    return await this.RetirarEfectivoRepository.findAll();
  }
}
