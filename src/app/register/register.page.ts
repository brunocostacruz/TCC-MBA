import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  email: String;
  name: String;
  phone: Number;
  password: String;
  constructor() { }

  ngOnInit() {
  }

  
  save() {
   console.log(this.email);
   console.log(this.name);
   console.log(this.phone);
   console.log(this.password);

  }
}
