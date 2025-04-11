import { Component } from '@angular/core';
import { GeneralService } from 'src/app/ui/shared/services/general.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atm',
  standalone: false,
  styleUrl: './atm.component.scss',
  templateUrl: './atm.component.html',
})
export class AtmComponent {
  constructor(
    private app: GeneralService,
    private router: Router,
  ) {}

  public irConsultarSaldo(): void {
    this.router.navigate(['admin/operaciones/consultar-saldo']);
  }
  public irRetirarEfectivo(): void {
    this.router.navigate(['admin/operaciones/retirar-efectivo']);
  }
  public irDepositarfectivo(): void {
    this.router.navigate(['admin/operaciones/depositar-efectivo']);
  }
  public salir(): void {
    this.mostrarAviso('Saliendo de la aplicación');
  }
  private mostrarAviso(aviso: string): void {
    this.app.swal.alert('Notificación', `${aviso}`);
  }
}
