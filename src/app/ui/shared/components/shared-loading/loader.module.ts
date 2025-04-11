import { LoadingLayerComponent } from './loading-layer/loading-layer.component';
import { NgModule } from '@angular/core';
import { SharedModule } from 'primeng/api';
import { Skeleton } from 'primeng/skeleton';
import { SkeletonChartComponent } from './skeleton-chart/skeleton-chart.component';
import { SkeletonFormComponent } from './skeleton-form/skeleton-form.component';
import { SkeletonTableComponent } from './skeleton-table/skeleton-table.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    LoadingLayerComponent,
    SkeletonChartComponent,
    SkeletonFormComponent,
    SkeletonTableComponent,
  ],
  exports: [
    LoadingLayerComponent,
    SkeletonChartComponent,
    SkeletonFormComponent,
    SkeletonTableComponent,
  ],
  imports: [SharedModule, TableModule, Skeleton],
})
export class LoaderModule {}
