import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PendingServicesPageRoutingModule } from './pending-services-routing.module';

import { PendingServicesPage } from './pending-services.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PendingServicesPageRoutingModule
  ],
  declarations: [PendingServicesPage]
})
export class PendingServicesPageModule {}
