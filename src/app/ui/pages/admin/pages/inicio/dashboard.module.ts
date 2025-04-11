import { Chart, registerables } from 'chart.js';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { ChartModule } from 'primeng/chart';
import { CommonModule } from '@angular/common';
import { DashboardControlComponent } from './dashboard-control/dashboard-control.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LoaderModule } from 'src/app/ui/shared/components/shared-loading/loader.module';
import { NgModule } from '@angular/core';
import { ProductosCargadosChartComponent } from './charts/productos-cargados-chart/productos-cargados-chart.component';
import { RippleModule } from 'primeng/ripple';
import { SharedModule } from 'primeng/api';

Chart.register(...registerables, ChartDataLabels);

@NgModule({
  declarations: [DashboardControlComponent, ProductosCargadosChartComponent],
  imports: [
    ButtonModule,
    ChartModule,
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    LoaderModule,
    ReactiveFormsModule,
    RippleModule,
    SharedModule,
  ],
})
export class DashboardModule {}
