import { Chart, registerables } from 'chart.js';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { CommonModule } from '@angular/common';
import { DashboardControlComponent } from './dashboard-control/dashboard-control.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LoaderModule } from 'src/app/ui/shared/components/shared-loading/loader.module';
import { NgModule } from '@angular/core';
import { ProductosCargadosChartComponent } from './charts/productos-cargados-chart/productos-cargados-chart.component';
import { SharedModule } from 'primeng/api';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(...registerables, ChartDataLabels);

@NgModule({
  declarations: [DashboardControlComponent, ProductosCargadosChartComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    LoaderModule,
    ReactiveFormsModule,
    SharedModule,
    ChartModule,
  ],
})
export class DashboardModule {}
