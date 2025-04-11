import { HttpClient } from '@angular/common/http';
import { IRetirarEfectivoRepository } from '../../domain/retirar-efectivo/repositories/retirar-efectivo.repository';
import { Injectable } from '@angular/core';
import { RetirarEfectivoDTO } from '../dtos/retirar-efectivo.dto';
import { RetirarEfectivoEntity } from '../../domain/retirar-efectivo/entities/retirar-efectivo.entity';
import { RetirarEfectivoMapper } from '../mappers/retirar-efectivo.mapper';

@Injectable()
export class RetirarEfectivoRepository implements IRetirarEfectivoRepository {
  // private readonly baseUrl: string = `${environment.EMPRESA.URL}`;
  constructor(private http: HttpClient) {}

  public async findAll(): Promise<RetirarEfectivoEntity[]> {
    // let params: HttpParams = new HttpParams();
    // params = params.set('cantidadEfectivo', cantidadEfectivo.toString());
    // const url: string = `${this.baseUrl}/retirar-efectivo`; // URL del endpoint hipotetico
    // const res: RetirarEfectivoDTO = await lastValueFrom(
    //   this.http.get<any>(url, { params: params }),
    // );

    // TODO: simular promise con datos de prueba
    const res: RetirarEfectivoDTO[] = await Promise.all([
      new RetirarEfectivoDTO(1000, 2, 'Billete'),
      new RetirarEfectivoDTO(500, 5, 'Billete'),
      new RetirarEfectivoDTO(200, 10, 'Billete'),
      new RetirarEfectivoDTO(100, 20, 'Billete'),
      new RetirarEfectivoDTO(50, 30, 'Billete'),
      new RetirarEfectivoDTO(20, 40, 'Billete'),
      new RetirarEfectivoDTO(10, 50, 'Moneda'),
      new RetirarEfectivoDTO(5, 100, 'Moneda'),
      new RetirarEfectivoDTO(2, 200, 'Moneda'),
      new RetirarEfectivoDTO(1, 300, 'Moneda'),
      new RetirarEfectivoDTO(0.5, 100, 'Moneda'),
    ]);
    return RetirarEfectivoMapper.toDomainEntityArray(res);
  }
}
