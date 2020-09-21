import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private menu: MenuController,
    private router: Router,
  ) { }

  openMenu() {
    this.menu.open();
  }

  openCadService() {
    this.router.navigateByUrl('servico')
    this.menu.close();
  }

  showDetailschedulingPending() {
    this.router.navigateByUrl('detail-scheduling-pending')
  }

  closeMenu(){
    this.menu.close();
  }

  logout(){
    this.router.navigateByUrl('login')
  }
}

