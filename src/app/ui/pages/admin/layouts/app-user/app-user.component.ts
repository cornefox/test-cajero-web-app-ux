import { Component } from '@angular/core';
import { GeneralService } from 'src/app/ui/shared/services/general.service';
@Component({
  host: {
    '[class.hidden]': '!isMenuVisible',
    class:
      'absolute top-[3.25rem] right-0 w-72 p-4 bg-surface-0 dark:bg-surface-900 border border-surface rounded-border origin-top shadow-[0px_3px_5px_rgba(0,0,0,0.02),0px_0px_2px_rgba(0,0,0,0.05),0px_1px_4px_rgba(0,0,0,0.08)]',
  },
  selector: 'app-user',
  standalone: false,
  styleUrl: './app-user.component.scss',
  templateUrl: './app-user.component.html',
})
export class AppUserComponent {
  constructor(private app: GeneralService) {}

  public changePaswoord(): void {
    this.mostrarAviso(
      'Será redirigido para actualizar su contraseña. Un momento, por favor.',
    );
  }

  public goPerfil(): void {
    this.mostrarAviso('Redirigiendo a su perfil de usuario...');
  }

  public logout(): void {
    this.mostrarAviso('Está cerrando sesión. Gracias por su visita.');
  }

  private mostrarAviso(aviso: string): void {
    this.app.swal.alert('Notificación', aviso);
  }
}
