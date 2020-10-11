import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-pending-services',
  templateUrl: './pending-services.page.html',
  styleUrls: ['./pending-services.page.scss'],
})
export class PendingServicesPage implements OnInit {
  name: string;
  startDate: string;
  startTime: string;
  dataReturned: any;
  constructor(
    private modalController: ModalController,
    private navParams: NavParams,) { }

  ngOnInit() {
    this.name = this.navParams.data.name;
    this.startDate = this.navParams.data.startDate;
    this.startTime = this.navParams.data.startTime;
  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }
}
