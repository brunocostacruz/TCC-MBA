import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailSchedulingPendingPage } from './detail-scheduling-pending.page';

const routes: Routes = [
  {
    path: '',
    component: DetailSchedulingPendingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailSchedulingPendingPageRoutingModule {}
