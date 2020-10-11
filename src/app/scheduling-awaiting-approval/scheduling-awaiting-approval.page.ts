import { Component, OnInit } from '@angular/core';
import {
  ModalController,
  NavParams,
  ActionSheetController, ToastController
} from '@ionic/angular';
import { PendingServicesPage } from '../pending-services/pending-services.page';

@Component({
  selector: 'app-scheduling-awaiting-approval',
  templateUrl: './scheduling-awaiting-approval.page.html',
  styleUrls: ['./scheduling-awaiting-approval.page.scss'],
})

export class SchedulingAwaitingApprovalPage implements OnInit {
  name: string;
  startDate: string;
  startTime: string;
  dataReturned: any;
  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    public actionSheetController: ActionSheetController,
    public toastController: ToastController,
  ) { }

  ngOnInit() {
    console.table(this.navParams);
    this.name = this.navParams.data.name;
    this.startDate = this.navParams.data.startDate;
    this.startTime = this.navParams.data.startTime;
  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  async openModalServicePending() {
    const modal = await this.modalController.create({
      component: PendingServicesPage,
      componentProps: {
        "name": this.name,
        "startDate": this.startDate,
        "startTime": this.startTime
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        console.log('Modal Sent Data :' + dataReturned);
      }
    });

    return await modal.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Agendamento aprovado com sucesso!',
      duration: 2000
    });
    toast.present();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Ver Informações',
        icon: 'list-outline',
        handler: () => {
          this.openModalServicePending();
        }
      }, {
        text: 'Aprovar',
        icon: 'checkmark-outline',
        handler: () => {
          this.presentToast();
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          //   console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}