import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthService } from 'src/app/ui/shared/services/auth.service';
@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './app-user.component.html',
  styleUrl: './app-user.component.scss',
  host: {
    '[class.hidden]': '!isMenuVisible',
    class:
      'absolute top-[3.25rem] right-0 w-72 p-4 bg-surface-0 dark:bg-surface-900 border border-surface rounded-border origin-top shadow-[0px_3px_5px_rgba(0,0,0,0.02),0px_0px_2px_rgba(0,0,0,0.05),0px_1px_4px_rgba(0,0,0,0.08)]',
  },
})
export class AppUserComponent {
  // private auth = inject(AuthService);
  private router = inject(Router);

  public logout() {
    console.log('Sesión cerrada');
    // this.auth.onSignOut();
    this.router.navigateByUrl('/');
  }
}
