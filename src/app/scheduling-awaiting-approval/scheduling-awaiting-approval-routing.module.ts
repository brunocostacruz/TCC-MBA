import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchedulingAwaitingApprovalPage } from './scheduling-awaiting-approval.page';

const routes: Routes = [
  {
    path: '',
    component: SchedulingAwaitingApprovalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchedulingAwaitingApprovalPageRoutingModule {}
