import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login',                     loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'home',                      loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'service',                   loadChildren: () => import('./service/service.module').then(m => m.ServicePageModule) },
  { path: 'detail-scheduling-pending', loadChildren: () => import('./detail-scheduling-pending/detail-scheduling-pending.module').then(m => m.DetailSchedulingPendingPageModule) },
  { path: 'pending-services',          loadChildren: () => import('./pending-services/pending-services.module').then(m => m.PendingServicesPageModule) },
  { path: 'newappointment',            loadChildren: () => import('./new-appointment/new-appointment.module').then(m => m.NewAppointmentPageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
