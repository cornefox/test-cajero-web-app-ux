import { Component, WritableSignal, signal } from '@angular/core';

@Component({
  selector: 'app-consultar-saldo',
  standalone: false,
  styleUrl: './consultar-saldo.component.scss',
  templateUrl: './consultar-saldo.component.html',
})
export class ConsultarSaldoComponent {
  public saldo: WritableSignal<number> = signal(12550);
}
