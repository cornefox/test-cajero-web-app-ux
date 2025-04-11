import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { FormUtils } from 'src/app/libs/utils/form-utils';
import { LoaderService } from 'src/app/ui/shared/services/loader.service';

@Component({
  selector: 'app-retirar-efectivo',
  standalone: false,
  styleUrls: ['./retirar-efectivo.component.scss'],
  templateUrl: './retirar-efectivo.component.html',
})
export class RetirarEfectivoComponent {
  public monto: number = 0;
  public resultado: { denominacion: string; cantidad: number }[] = [];

  public myForm: FormGroup;
  public formUtils: typeof FormUtils = FormUtils;

  public billetesMonedas: any[] = [
    { cantidadDisponible: 2, denominacion: 1000, tipo: 'Billete' },
    { cantidadDisponible: 5, denominacion: 500, tipo: 'Billete' },
    { cantidadDisponible: 10, denominacion: 200, tipo: 'Billete' },
    { cantidadDisponible: 20, denominacion: 100, tipo: 'Billete' },
    { cantidadDisponible: 30, denominacion: 50, tipo: 'Billete' },
    { cantidadDisponible: 40, denominacion: 20, tipo: 'Billete' },
    { cantidadDisponible: 50, denominacion: 10, tipo: 'Moneda' },
    { cantidadDisponible: 100, denominacion: 5, tipo: 'Moneda' },
    { cantidadDisponible: 200, denominacion: 2, tipo: 'Moneda' },
    { cantidadDisponible: 300, denominacion: 1, tipo: 'Moneda' },
    { cantidadDisponible: 100, denominacion: 0.5, tipo: 'Moneda' },
  ];

  constructor(
    private fb: FormBuilder,
    private loaderService: LoaderService,
  ) {
    this.myForm = this.fb.group({
      valueMonto: ['', [Validators.required, Validators.min(0.5)]],
    });

    // Ordena las denominaciones de mayor a menor al inicio
    this.billetesMonedas.sort((a, b) => b.denominacion - a.denominacion);
  }

  public getTotalDisponible(): number {
    return this.billetesMonedas.reduce(
      (acc, item) => acc + item.denominacion * item.cantidadDisponible,
      0,
    );
  }

  public getEfectivoRestante(): number {
    return this.getTotalDisponible();
  }

  public calcularRetiro(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    let montoSolicitado: number = this.myForm.value.valueMonto;

    if (montoSolicitado > this.getTotalDisponible()) {
      alert('El monto solicitado excede el efectivo disponible en el cajero.');
      return;
    }

    this.resultado = [];
    let montoRestante = montoSolicitado;

    for (const item of this.billetesMonedas) {
      if (montoRestante >= item.denominacion && item.cantidadDisponible > 0) {
        let cantidad: number = Math.floor(montoRestante / item.denominacion);
        cantidad = Math.min(cantidad, item.cantidadDisponible);

        if (cantidad > 0) {
          this.resultado.push({
            denominacion: `${item.denominacion} MXN (${item.tipo})`,
            cantidad,
          });
          montoRestante -= cantidad * item.denominacion;
          montoRestante = parseFloat(montoRestante.toFixed(2)); // Evitar errores por decimales
          item.cantidadDisponible -= cantidad;
        }
      }
    }

    if (montoRestante > 0) {
      alert(
        'No se puede retirar la cantidad exacta con los billetes/monedas disponibles.',
      );
    }
  }
}
