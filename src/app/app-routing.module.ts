import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./pages/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'discovery',
    loadChildren: () =>
      import('./pages/discovery/discovery.module').then(
        (m) => m.DiscoveryModule
      ),
  },
  {
    path: 'support',
    loadChildren: () =>
      import('./pages/support/support.module').then((m) => m.SupportModule),
  },
  {
    path: 'privacy',
    loadChildren: () =>
      import('./pages/privacy/privacy.module').then((m) => m.PrivacyModule),
  },
  { path: 'cookies', loadChildren: () => import('./pages/cookies/cookies.module').then(m => m.CookiesModule) },
  { path: 'to-s', loadChildren: () => import('./pages/to-s/to-s.module').then(m => m.ToSModule) },
  { path: '404', loadChildren: () => import('./pages/error-page/error-page.module').then(m => m.ErrorPageModule) },
];
@NgModule({
  // declarations: [],
  // imports: [CommonModule],
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
