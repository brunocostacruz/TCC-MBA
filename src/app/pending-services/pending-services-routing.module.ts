import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PendingServicesPage } from './pending-services.page';

const routes: Routes = [
  {
    path: '',
    component: PendingServicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PendingServicesPageRoutingModule {}
