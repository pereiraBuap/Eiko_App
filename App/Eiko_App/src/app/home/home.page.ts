import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Platform, ToastController, ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements AfterViewInit {
  @ViewChild('imageCanvas', { static: false }) canvas: any;
  canvasElement: any;
  selectedColor = '#f80000';
  colors = [ '#f80000', '#ffff00', '#39ff14', '#f39f18', '#cb4dd1', '#9b9b9b' ];
  
  drawing = false;
  
  constructor(private plt: Platform, private toastCtrl: ToastController, public modalCtrl: ModalController) {}
 
  ngAfterViewInit() {
    var background = new Image();
    background.src = './assets/interfaces/VII.jpg';
    this.canvasElement = this.canvas.nativeElement;
    this.canvasElement.width = this.plt.width() + '';
    this.canvasElement.height = 300;
    let ctx = this.canvasElement.getContext('2d');
    background.onload = () => {
        ctx.drawImage(background,0,0, this.canvasElement.width, this.canvasElement.height);   
    }
  }

  endDrawing() {
    this.drawing = false;
  }
 
  selectColor(color) {
    this.selectedColor = color;
    this.drawing = true;
    var background = new Image();
    background.src = './assets/interfaces/VII.jpg';
    let ctx = this.canvasElement.getContext('2d');
    //ctx.clearReact(0,0,this.canvasElement.width, this.canvasElement.height);
    ctx.drawImage(background,0,0, this.canvasElement.width, this.canvasElement.height);
    ctx.fillStyle = color + 50;
    ctx.fillRect(0,0,this.canvasElement.width, this.canvasElement.height);
    this.endDrawing();
  }
  
  setTransparency(event){
      let color: any;
      color = this.selectedColor;
      this.drawing = true;
      let ctx = this.canvasElement.getContext('2d');
      ctx.fillStyle = color + event.detail.value;
      ctx.fillRect(0,0,this.canvasElement.width, this.canvasElement.height);
      this.endDrawing();
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      componentProps: {
        'color': this.selectedColor,
      }
    });
    return await modal.present();
  }
}