import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailSchedulingPendingPageRoutingModule } from './detail-scheduling-pending-routing.module';

import { DetailSchedulingPendingPage } from './detail-scheduling-pending.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailSchedulingPendingPageRoutingModule
  ],
  declarations: [DetailSchedulingPendingPage]
})
export class DetailSchedulingPendingPageModule {}
