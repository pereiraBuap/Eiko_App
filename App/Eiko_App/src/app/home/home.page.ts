import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  
  dark: Boolean;
  first: Boolean;
  second: Boolean;
  third: Boolean;

  constructor(public modalCtrl: ModalController) {}

  ngOnInit(){  }

  darkTheme(){
    document.body.classList.toggle('dark');
    this.dark = true;
    this.first = false;
    this.second = false;
    this.third = false;
  }
  
  firstTheme(){
    document.body.classList.toggle('first');
    this.dark = false;
    this.first = true;
    this.second = false;
    this.third = false;
  }

  secondTheme(){
    document.body.classList.toggle('second');
    this.dark = false;
    this.first = false;
    this.second = true;
    this.third = false;
  }

  thirdTheme(){
    document.body.classList.toggle('third');
    this.dark = false;
    this.first = false;
    this.second = false;
    this.third = true;
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
