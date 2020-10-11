import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular'; 
import { SchedulingAwaitingApprovalPage } from '../scheduling-awaiting-approval/scheduling-awaiting-approval.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  dataReturned: any;
  constructor(
    public modalController: ModalController,
    private menu: MenuController,
    private router: Router,
  ) { }

  openMenu() {
    this.menu.open();
  }

  openCadService() {
    this.router.navigateByUrl('service')
    this.menu.close();
  }

  showDetailschedulingPending() {
    this.router.navigateByUrl('detail-scheduling-pending')
  }

  closeMenu() {
    this.menu.close();
  }

  logout() {
    this.router.navigateByUrl('login')
    this.menu.close();
  }

  openAppointment() {
    this.router.navigateByUrl('newappointment')

  }

  async openschedulingAwaitingApproval() {
    const modal = await this.modalController.create({
      component: SchedulingAwaitingApprovalPage,
      componentProps: {
        "name": 'Leticia Ramos',
        "startDate": '25/10/2020',
        "startTime": '10:10'
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        console.log('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();
  }
}

