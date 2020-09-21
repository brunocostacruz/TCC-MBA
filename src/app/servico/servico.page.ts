import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from "@ionic/core";

@Component({
  selector: 'app-servico',
  templateUrl: './servico.page.html',
  styleUrls: ['./servico.page.scss'],
})
export class ServicoPage implements OnInit {
  services: string[] = [
    "Corte", ,
    "Escova",
    "Maquiagem",
    "Progressiva"];
    nome: String;
  constructor(
    private pickerCtrl: PickerController,
  ) { }

  ngOnInit() {
  }
submit(){
  console.log("Fazer Gravar: " + this.nome)
}
  async showPicker() {
    let options: PickerOptions = {
      buttons: [
        {
          text: "Cancel",
          role: 'cancel'
        },
        {
          text: 'Ok',
          handler: (value: any) => {
            this.nome = value.services.value
          }
        }
      ],
      columns: [{
        name: 'services',
        options: this.getColumnOptions()
      }]
    };

    let picker = await this.pickerCtrl.create(options);
    picker.present()
  }

  getColumnOptions() {
    let options = [];
    this.services.forEach(x => {
      options.push({ text: x, value: x });      
    });
    return options;
  }
}
