import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchedulingAwaitingApprovalPageRoutingModule } from './scheduling-awaiting-approval-routing.module';

import { SchedulingAwaitingApprovalPage } from './scheduling-awaiting-approval.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchedulingAwaitingApprovalPageRoutingModule
  ],
  declarations: [SchedulingAwaitingApprovalPage]
})
export class SchedulingAwaitingApprovalPageModule {}
