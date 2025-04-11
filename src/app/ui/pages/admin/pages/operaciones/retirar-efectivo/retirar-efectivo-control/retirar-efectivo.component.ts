import { Component, OnInit, WritableSignal, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormUtils } from 'src/app/libs/utils/form-utils';
import { ResultadoRetiro } from '../interfaces/resultado-retiro.interface';
import { RetirarEfectivoEntity } from 'src/app/core/domain/retirar-efectivo/entities/retirar-efectivo.entity';
import { RetirarEfectivoFindService } from 'src/app/core/application/retirar-efectivo/use-cases/retirar-efectivo-find.service';

@Component({
  selector: 'app-retirar-efectivo',
  standalone: false,
  styleUrls: ['./retirar-efectivo.component.scss'],
  templateUrl: './retirar-efectivo.component.html',
})
export class RetirarEfectivoComponent implements OnInit {
  public cantidadDenominacion: WritableSignal<ResultadoRetiro[]> = signal([]);
  public actualizarBilletesMonedas: WritableSignal<RetirarEfectivoEntity[]> =
    signal([]);

  public myForm: FormGroup;
  public formUtils: typeof FormUtils = FormUtils;

  constructor(
    private fb: FormBuilder,
    private retirarEfectivoFindService: RetirarEfectivoFindService,
  ) {
    this.myForm = this.fb.group({
      valueMonto: ['', [Validators.required, Validators.min(0.5)]],
    });
  }

  public ngOnInit(): void {
    this.inicializarComponente();
  }

  public async inicializarComponente(): Promise<void> {
    try {
      await this.obtenerCantidadDinero();
    } catch (error) {
      console.log(error);
    }
  }

  public async obtenerCantidadDinero(): Promise<void> {
    try {
      const res: any = await this.retirarEfectivoFindService.findAll();
      this.actualizarBilletesMonedas.set(res);
      console.log(`Cantidad de dinero: `, this.actualizarBilletesMonedas());
    } catch (error) {
      console.log(error);
    }
  }

  public obtenerTotalDisponible(): number {
    const response: RetirarEfectivoEntity[] = this.actualizarBilletesMonedas();
    return response.reduce(
      (totalDisponible, item) =>
        totalDisponible +
        (item.denominacion ?? 0) * (item.cantidadDisponible ?? 0),
      0,
    );
  }

  public obtenerEfectivoRestante(): number {
    return this.obtenerTotalDisponible();
  }

  public calcularRetiro(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    const montoSolicitado: number = this.myForm.value.valueMonto;

    if (montoSolicitado > this.obtenerTotalDisponible()) {
      alert('El monto solicitado excede el efectivo disponible en el cajero.');
      return;
    }

    // Obtenemos una copia del array actual
    const billetes: RetirarEfectivoEntity[] = [
      ...this.actualizarBilletesMonedas(),
    ];
    this.cantidadDenominacion.set([]);
    let montoRestante: number = montoSolicitado;

    for (const item of billetes) {
      const denominacion: number = item.denominacion ?? 0;
      const cantidadDisponible: number = item.cantidadDisponible ?? 0;

      if (montoRestante >= denominacion && cantidadDisponible > 0) {
        let cantidad: number = Math.floor(montoRestante / denominacion);
        cantidad = Math.min(cantidad, cantidadDisponible);

        if (cantidad > 0) {
          const updatedResultado: ResultadoRetiro[] = [
            ...this.cantidadDenominacion(),
            {
              cantidad,
              denominacion: `${denominacion} MXN (${item.tipo})`,
            },
          ];

          this.cantidadDenominacion.set(updatedResultado);

          montoRestante -= cantidad * denominacion;
          montoRestante = parseFloat(montoRestante.toFixed(2));
          item.cantidadDisponible = cantidadDisponible - cantidad;
        }
      }
    }

    this.actualizarBilletesMonedas.set(billetes);

    if (montoRestante > 0) {
      alert(
        'No se puede retirar la cantidad exacta con los billetes/monedas disponibles.',
      );
    } else {
      alert('Retiro exitoso.');
      console.log(this.actualizarBilletesMonedas());
    }
  }
}
