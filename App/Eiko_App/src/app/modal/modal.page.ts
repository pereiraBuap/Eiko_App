import { Component,  ViewChild, AfterViewInit, Input, OnInit  } from '@angular/core';
import { Platform, ToastController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements AfterViewInit{
  @ViewChild('canvas', { static: false }) canvas: any;
  canvasElement: any;
  @Input() color: any;
  
  constructor(private modalCtrl: ModalController, private plt:Platform, private tastrCtrl:ToastController) { }

  ngAfterViewInit(){
    console.log(this.color);
    this.canvasElement = this.canvas.nativeElement;
    this.canvasElement.width = this.plt.width() + '';
    this.canvasElement.height = this.plt.height() / 2;
    let ctx = this.canvasElement.getContext('2d');
    ctx.fillStyle = this.color + 50;
    ctx.fillRect(0,0,this.canvasElement.width, this.canvasElement.height);
  }

  closeModal() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
