// import { AuthService } from 'src/app/ui/shared/services/auth.service';
import { Component, inject } from '@angular/core';
import { GeneralService } from 'src/app/ui/shared/services/general.service';
import { LayoutService } from 'src/app/ui/shared/services/layout.service';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
  standalone: false,
})
export class TopbarComponent {
  items!: MenuItem[];
  // private auth = inject(AuthService);
  private router = inject(Router);
  public app = inject(GeneralService);

  constructor(public layoutService: LayoutService) {}

  public toggleDarkMode() {
    this.layoutService.layoutConfig.update((state) => ({
      ...state,
      darkTheme: !state.darkTheme,
    }));
  }

  public logout() {
    console.log('Sesión cerrada');
    // this.auth.onSignOut();
    this.router.navigateByUrl('/');
  }
}
