import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { RouterModule } from '@angular/router';
import { SharedConfiguratorModule } from '../../shared/components/shared-configurator/shared-configurator.module';

@NgModule({
  declarations: [LoginPageComponent, AuthLayoutComponent],
  imports: [
    AuthRoutingModule,
    ButtonModule,
    CheckboxModule,
    CommonModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    ReactiveFormsModule,
    RippleModule,
    RouterModule,
    SharedConfiguratorModule,
  ],
})
export class AuthModule {}
