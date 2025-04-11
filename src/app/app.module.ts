import { NgModule, provideAppInitializer } from '@angular/core';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import Aura from '@primeng/themes/aura';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LoaderModule } from './ui/shared/components/shared-loading/loader.module';
import { SkeletonTableDirective } from './ui/shared/directives/skeleton-table.directive';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, SkeletonTableDirective],
  exports: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // TODO: Pendiente de sustituir
    BrowserAnimationsModule,
    LoaderModule,
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    // ...httpInterceptorProviders,
    provideAnimationsAsync(),
    providePrimeNG({
      theme: { options: { darkModeSelector: '.app-dark' }, preset: Aura },
    }),
    provideAppInitializer(() => {
      // AppInitializer.init();
    }),
  ],
})
export class AppModule {}
