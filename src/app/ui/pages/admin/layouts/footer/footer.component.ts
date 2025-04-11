import { Component } from '@angular/core';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  public company = environment.APP.COMPANY;
  public fechaActual: Date = new Date();
  public version = environment.APP.VERSION;
  public nombreAmbiente = environment.APP.NAME;
}
