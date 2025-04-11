import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    loadChildren: async () => {
      const m: any = await import('./ui/pages/auth/auth.module');
      return m.AuthModule;
    },
    path: 'auth',
    title: 'Empresa | Login',
  },
  {
    loadChildren: async () => {
      const m: any = await import('./ui/pages/admin/admin.module');
      return m.AdminModule;
    },
    path: 'admin',
    title: 'Empresa | Dashboard',
  },
  {
    path: '**',
    redirectTo: 'auth', // Manejo de rutas no encontradas
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
