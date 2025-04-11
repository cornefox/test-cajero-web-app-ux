import { Component, OnInit, WritableSignal, signal } from '@angular/core';
import { LoaderService } from 'src/app/ui/shared/services/loader.service';

@Component({
  selector: 'app-dashboard-control',
  standalone: false,
  styleUrl: './dashboard-control.component.scss',
  templateUrl: './dashboard-control.component.html',
})
export class DashboardControlComponent implements OnInit {
  public loading: WritableSignal<boolean> = signal(true);

  constructor(private loaderService: LoaderService) {}

  public async ngOnInit(): Promise<void> {
    this.loaderService.showLoader();
    await this.initializeComponent();
    this.loaderService.hideLoader();
  }

  public async initializeComponent(): Promise<void> {
    try {
      await Promise.all([]);
    } catch (error) {
      console.log(error);
    } finally {
      this.loading.set(false);
    }
  }
}
