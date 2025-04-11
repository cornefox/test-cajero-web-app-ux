// import { AuthService } from 'src/app/ui/shared/services/auth.service';
import { Component } from '@angular/core';
import { GeneralService } from 'src/app/ui/shared/services/general.service';
import { LayoutService } from 'src/app/ui/shared/services/layout.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-topbar',
  standalone: false,
  styleUrl: './topbar.component.scss',
  templateUrl: './topbar.component.html',
})
export class TopbarComponent {
  public items!: MenuItem[];

  constructor(
    public app: GeneralService,
    public layoutService: LayoutService,
  ) {}
}
