import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-control',
  standalone: false,
  styleUrl: './dashboard-control.component.scss',
  templateUrl: './dashboard-control.component.html',
})
export class DashboardControlComponent implements OnInit {
  // constructor() {}

  public async ngOnInit(): Promise<void> {
    await this.initializeComponent();
  }

  public async initializeComponent(): Promise<void> {
    try {
      await Promise.all([]);
    } catch (error) {
      console.log(error);
    }
  }
}
