import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atm',
  standalone: false,
  styleUrl: './atm.component.scss',
  templateUrl: './atm.component.html',
})
export class AtmComponent {
  constructor(private router: Router) {}

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
    alert('Saliendo de la aplicación');
  }
}
