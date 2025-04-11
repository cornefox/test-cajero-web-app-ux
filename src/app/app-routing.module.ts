import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    loadChildren: async () => {
      const m: any = await import('./ui/pages/admin/admin.module');
      return m.AdminModule;
    },
    path: 'admin',
    title: 'Test Cajero | Dashboard',
  },
  {
    path: '**',
    redirectTo: 'admin',
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
