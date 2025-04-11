import { NgModule, provideAppInitializer } from '@angular/core';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkeletonTableDirective } from './ui/shared/directives/skeleton-table.directive';
import { LoaderModule } from './ui/shared/components/shared-loading/loader.module';
@NgModule({
  declarations: [AppComponent, SkeletonTableDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // TODO: Pendiente de sustituir
    BrowserAnimationsModule, // TODO: retirar al momento de desinstalar angular material
    LoaderModule,
  ],
  exports: [],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    // ...httpInterceptorProviders,
    provideAnimationsAsync(),
    providePrimeNG({
      theme: { preset: Aura, options: { darkModeSelector: '.app-dark' } },
    }),
    provideAppInitializer(() => {
      // AppInitializer.init();
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
