export class RetirarEfectivoDTO {
  private _denominacion: number | null | undefined;
  private _cantidadDisponible: number | null | undefined;
  private _tipo: string | null | undefined;

  constructor(
    denominacion?: number | null | undefined,
    cantidadDisponible?: number | null | undefined,
    tipo?: string | null | undefined,
  ) {
    this._denominacion = denominacion ?? null;
    this._cantidadDisponible = cantidadDisponible ?? null;
    this._tipo = tipo ?? null;
  }

  public get denominacion(): number | null | undefined {
    return this._denominacion;
  }

  public get cantidadDisponible(): number | null | undefined {
    return this._cantidadDisponible;
  }

  public get tipo(): string | null | undefined {
    return this._tipo;
  }

  public set denominacion(value: number | null | undefined) {
    this._denominacion = value;
  }

  public set cantidadDisponible(value: number | null | undefined) {
    this._cantidadDisponible = value;
  }

  public set tipo(value: string | null | undefined) {
    this._tipo = value;
  }
}
