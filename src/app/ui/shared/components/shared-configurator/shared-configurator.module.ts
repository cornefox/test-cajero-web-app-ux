import { AppConfiguratorComponent } from './app-configurator/app-configurator.component';
import { AppFloatingConfiguratorComponent } from './app-floating-configurator/app-floating-configurator.component';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SelectButtonModule } from 'primeng/selectbutton';
import { StyleClassModule } from 'primeng/styleclass';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [AppFloatingConfiguratorComponent, AppConfiguratorComponent],
  imports: [
    ButtonModule,
    ButtonModule,
    CommonModule,
    FormsModule,
    SelectButtonModule,
    StyleClassModule,
    TooltipModule,
  ],
  exports: [AppFloatingConfiguratorComponent, AppConfiguratorComponent],
})
export class SharedConfiguratorModule {}
