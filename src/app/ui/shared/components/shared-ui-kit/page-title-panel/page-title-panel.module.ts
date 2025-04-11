import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageTitlePanelComponent } from './components/page-title-panel.component';

const primeNgComponents: any[] = [ButtonModule];

@NgModule({
  declarations: [PageTitlePanelComponent],
  exports: [PageTitlePanelComponent],
  imports: [CommonModule, primeNgComponents],
})
export class PageTitlePanelModule {}
