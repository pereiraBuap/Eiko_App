import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  
  constructor(public modalCtrl: ModalController) {}

  ngOnInit(){  }

  darkTheme(){
    document.body.classList.toggle('dark');
  }
  
  firstTheme(){
    document.body.classList.toggle('first');
  }

  secondTheme(){
    document.body.classList.toggle('second');
  }

  thirdTheme(){
    document.body.classList.toggle('third');
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
    component: ModalPage,
    componentProps: {
    }
    });
    return await modal.present();
    }
}
