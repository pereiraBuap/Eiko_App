import { Component, Input, OnInit  } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit{
  @Input() color: any;
  
  constructor(private modalCtrl: ModalController) { }

  ngOnInit(){
  }
  
  closeModal() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
