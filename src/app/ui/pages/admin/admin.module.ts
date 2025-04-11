import { ConfirmationService, MessageService } from 'primeng/api';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AppMenuComponent } from './layouts/app-menu/app-menu.component';
import { AppMenuItemComponent } from './layouts/app-menu-item/app-menu-item.component';
import { AppUserComponent } from './layouts/app-user/app-user.component';
import { CommonModule } from '@angular/common';
import { ConsultarSaldoModule } from './pages/operaciones/consultar-saldo/consultar-saldo.module';
import { DashboardModule } from './pages/inicio/dashboard.module';
import { DepositarEfectivoModule } from './pages/operaciones/depositar-efectivo/depositar-efectivo.module';
import { DialogModule } from 'primeng/dialog';
import { FooterComponent } from './layouts/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { LayoutService } from '../../shared/services/layout.service';
import { LoaderModule } from '../../shared/components/shared-loading/loader.module';
import { MenuModule } from 'primeng/menu';
import { NgModule } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RetirarEfectivoModule } from './pages/operaciones/retirar-efectivo/retirar-efectivo.module';
import { RippleModule } from 'primeng/ripple';
import { RouterModule } from '@angular/router';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SharedConfiguratorModule } from '../../shared/components/shared-configurator/shared-configurator.module';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { StyleClassModule } from 'primeng/styleclass';
import { TopbarComponent } from './layouts/topbar/topbar.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    AppMenuComponent,
    AppMenuItemComponent,
    AppUserComponent,
    FooterComponent,
    SidebarComponent,
    TopbarComponent,
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
    ConsultarSaldoModule,
    DashboardModule,
    DepositarEfectivoModule,
    DialogModule,
    FormsModule,
    LoaderModule,
    MenuModule,
    ProgressSpinnerModule,
    RetirarEfectivoModule,
    RippleModule,
    RouterModule,
    SelectButtonModule,
    SharedConfiguratorModule,
    StyleClassModule,
  ],
  providers: [LayoutService, MessageService, ConfirmationService],
})
export class AdminModule {}
