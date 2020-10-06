import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  isLoading = false;
  email: String;
  senha: String;
  loaderToShow: any;
  constructor(
    public loadingController: LoadingController,
    private router: Router,
  ) {

  }

  submit() {
    this.router.navigateByUrl('home')
    var login = { email: this.email, senha: this.senha };
  }
}

