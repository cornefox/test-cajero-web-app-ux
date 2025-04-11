import { Component, OnInit, WritableSignal, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormUtils } from 'src/app/libs/utils/form-utils';
import { LoaderService } from 'src/app/ui/shared/services/loader.service';
import { RetirarEfectivoEntity } from 'src/app/core/domain/retirar-efectivo/entities/retirar-efectivo.entity';
import { RetirarEfectivoFindService } from 'src/app/core/application/retirar-efectivo/use-cases/retirar-efectivo-find.service';

@Component({
  selector: 'app-retirar-efectivo',
  standalone: false,
  styleUrls: ['./retirar-efectivo.component.scss'],
  templateUrl: './retirar-efectivo.component.html',
})
export class RetirarEfectivoComponent implements OnInit {
  public monto: number = 0;
  public resultado: { denominacion: string; cantidad: number }[] = [];

  public myForm: FormGroup;
  public formUtils: typeof FormUtils = FormUtils;

  public billetesMonedas: WritableSignal<RetirarEfectivoEntity[]> = signal([]);

  constructor(
    private fb: FormBuilder,
    private loaderService: LoaderService,
    private retirarEfectivoFindService: RetirarEfectivoFindService,
  ) {
    this.myForm = this.fb.group({
      valueMonto: ['', [Validators.required, Validators.min(0.5)]],
    });
  }

  public ngOnInit(): void {
    this.initializeComponent();
  }

  public async initializeComponent(): Promise<void> {
    try {
      await this.getData();
    } catch (error) {
      console.log(error);
    }
  }

  public async getData(): Promise<void> {
    try {
      const response: any = await this.retirarEfectivoFindService.findAll();
      this.billetesMonedas.set(response);
      console.log(`Respuesta `, response);
    } catch (error) {
      console.log(error);
    }
  }

  public getTotalDisponible(): number {
    const data: RetirarEfectivoEntity[] = this.billetesMonedas();
    return data.reduce(
      (acc, item) =>
        acc + (item.denominacion ?? 0) * (item.cantidadDisponible ?? 0),
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

    const montoSolicitado: number = this.myForm.value.valueMonto;

    if (montoSolicitado > this.getTotalDisponible()) {
      alert('El monto solicitado excede el efectivo disponible en el cajero.');
      return;
    }

    // Obtenemos una copia del array actual de billetes/monedas
    const billetes = [...this.billetesMonedas()];
    this.resultado = [];
    let montoRestante = montoSolicitado;

    for (const item of billetes) {
      const denominacion = item.denominacion ?? 0;
      const cantidadDisponible = item.cantidadDisponible ?? 0;

      if (montoRestante >= denominacion && cantidadDisponible > 0) {
        let cantidad: number = Math.floor(montoRestante / denominacion);
        cantidad = Math.min(cantidad, cantidadDisponible);

        if (cantidad > 0) {
          this.resultado.push({
            denominacion: `${denominacion} MXN (${item.tipo})`,
            cantidad,
          });

          montoRestante -= cantidad * denominacion;
          montoRestante = parseFloat(montoRestante.toFixed(2)); // Control de decimales
          item.cantidadDisponible = cantidadDisponible - cantidad;
        }
      }
    }

    // Actualizamos el valor del signal
    this.billetesMonedas.set(billetes);

    if (montoRestante > 0) {
      alert(
        'No se puede retirar la cantidad exacta con los billetes/monedas disponibles.',
      );
    }
  }
}
