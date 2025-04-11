import {
  ChangeDetectorRef,
  Component,
  OnInit,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-productos-cargados-chart',
  standalone: false,
  styleUrl: './productos-cargados-chart.component.scss',
  templateUrl: './productos-cargados-chart.component.html',
})
export class ProductosCargadosChartComponent implements OnInit {
  public data: any;
  public options: any;

  public platformId: any = inject(PLATFORM_ID);

  constructor(private cd: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.initChart();
  }

  public initChart(): void {
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle: any = getComputedStyle(document.documentElement);

      this.data = {
        datasets: [
          {
            backgroundColor: documentStyle.getPropertyValue('--p-cyan-500'),
            data: [2290, 328, 432, 616, 59, 150, 1331, 31, 137, 60, 81, 1403],
            label: 'Productos Completos',
            type: 'bar',
          },
          {
            backgroundColor: documentStyle.getPropertyValue('--p-gray-500'),
            data: [1233, 176, 233, 331, 32, 81, 717, 16, 74, 32, 43, 756],
            label: 'Productos Incompletos',
            type: 'bar',
          },
        ],
        labels: [
          'APAGADORES',
          'AUTOMATIZACION',
          'CANALIZACION',
          'ENERGIA',
          'EXTRACTORES',
          'FABRICACION',
          'ILUMINACION',
          'INSTRUMENTACION',
          'MARKETING',
          'MUEBLES',
          'VARIOS',
          'VENTILADORES',
        ],
      };

      this.options = {
        animations: {
          tension: {
            duration: 1000,
            easing: 'easeInOutCubic',
          },
        },
        aspectRatio: 0.7,
        elements: {
          bar: {
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            borderRadius: 10,
          },
        },
        maintainAspectRatio: false,
        plugins: {
          datalabels: {
            align: 'center',
            anchor: 'center',
            borderRadius: 4,
            clip: false, // No recortar el texto
            color: '#fff',
            font: {
              size: 8,
              weight: 'bold',
            },
            formatter: (value: any, ctx: any) => {
              const sum: any = ctx.chart.data.datasets
                .map((dataset: any) => dataset.data[ctx.dataIndex])
                .reduce((acc: number, val: number) => acc + val, 0);
              const percentage: any = ((value / sum) * 100).toFixed(1) + '%';

              if (ctx.datasetIndex === 1) {
                return `${percentage}`; // Solo el porcentaje para "Incompletos"
              }

              if (ctx.datasetIndex === 0) {
                return `${value}`; // Solo la cantidad para "Completos"
              }

              return '';
            },
            offset: (ctx: any) => {
              // Si el valor de la barra es bajo, se ajusta el texto hacia arriba
              const value: any = ctx.dataset.data[ctx.dataIndex];
              const maxHeight: any = ctx.chart.scales.y.max;
              const barHeight: any = (value / maxHeight) * 100;

              if (barHeight < 15) {
                return 15; // Mueve el texto hacia arriba cuando la barra es muy baja
              }
              return 10; // Deja el texto dentro de la barra para barras más grandes
            },
            overflow: 'visible', // Asegura que el texto no se recorte
            padding: 4, // Un pequeño relleno para hacer que el texto se vea más limpio dentro de la barra
            rotation: 0, // Mantener el texto en horizontal
          },
          legend: {
            labels: {
              color: '#666',
              font: {
                size: 12,
                weight: 'normal',
              },
            },
            position: 'top',
          },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            bodyFont: {
              family: 'Arial, sans-serif',
              size: 12,
              weight: 'normal',
            },
            borderColor: 'rgba(0, 0, 0, 0.1)',
            borderWidth: 1,
            callbacks: {
              label: (tooltipItem: any) => {
                const dataset: any = tooltipItem.dataset;
                const value: any = dataset.data[tooltipItem.dataIndex];
                const total: any = tooltipItem.chart.data.datasets.reduce(
                  (acc: number, dataset: any) =>
                    acc + dataset.data[tooltipItem.dataIndex],
                  0,
                );
                const percentage: any =
                  ((value / total) * 100).toFixed(1) + '%';

                // Mostrar primero porcentaje y luego valor
                if (tooltipItem.datasetIndex === 0) {
                  return `Porcentaje: ${percentage}`;
                } else {
                  return `Valor: ${value}`;
                }
              },
              // Cambiar el color del cuadro en el tooltip según el dataset contrario
              labelColor: function (tooltipItem: any) {
                const datasetIndex: any = tooltipItem.datasetIndex;
                const oppositeDatasetIndex: any = datasetIndex === 0 ? 1 : 0; // Invertir índices de dataset
                const oppositeDataset: any =
                  tooltipItem.chart.data.datasets[oppositeDatasetIndex];
                return {
                  backgroundColor: oppositeDataset.backgroundColor, // Cambiar el color del cuadro
                  borderColor: oppositeDataset.backgroundColor,
                };
              },
            },
            cornerRadius: 5,
            intersect: false,
            mode: 'index',
            padding: 10,
            titleFont: {
              family: 'Arial, sans-serif',
              size: 14,
              weight: 'bold',
            },
          },
        },
        responsive: true,
        scales: {
          x: {
            grid: {
              color: '#f0f0f0',
              drawBorder: false,
            },
            stacked: true,
            ticks: {
              color: '#666',
              font: {
                size: 12,
              },
              maxRotation: 45,
              minRotation: 30,
            },
          },
          y: {
            grid: {
              color: '#f0f0f0',
              drawBorder: false,
            },
            stacked: true,
            ticks: {
              color: '#666',
              font: {
                size: 12,
              },
              max: 5000,
              stepSize: 500,
            },
          },
        },
      };

      this.cd.markForCheck();
    }
  }
}
