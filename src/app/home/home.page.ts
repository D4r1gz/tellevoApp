import { Component, ElementRef, ViewChild } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('ini', { read: ElementRef, static: true }) ini: ElementRef;
  constructor(private animationCtrl: AnimationController) {}
  ngAfterViewInit() {
  const ini: Animation = this.animationCtrl.create()
  .addElement(this.ini.nativeElement)
  .duration(2000)
  .beforeStyles({
    opacity: 0.9
  })
  .afterStyles({
    background: 'rgba(0, 255, 0, 0.5)'
  })
  .afterClearStyles(['opacity'])
  .keyframes([
    { offset: 0, transform: 'scale(1)' },
    { offset: 0.5, transform: 'scale(1.5)' },
    { offset: 1, transform: 'scale(1)' }
  ])
  
   const animar = this.animationCtrl.create()
  .duration(5000)
  .iterations(Infinity)
  .addAnimation([ini]);

  animar.play()
  }

}
