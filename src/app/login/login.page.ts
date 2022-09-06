import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario:string;
  password:string;

  constructor(public toastController:ToastController, private router:Router) {}
  siguiente(){

    let navigationExtras: NavigationExtras={
      state:{usuario:this.usuario}
    }

    this.router.navigate(['/inicio'], navigationExtras)
  }
  ngOnInit() {
  }
  validar(user: string, pasword: string){
    if(user =="" ){
      console.log("1")
      this.presentToast
      
    }else if (pasword=="") {
      console.log("2")
      this.presentToast
    } else {
      console.log("3")
      return true
    }


    
  }    
  
    async presentToast() {
    const toast = await this.toastController.create({
      header: 'Alerta',
      message: 'el usuario no es correcto',
      buttons: ['OK'],
      
      });
      toast.present();
    }


}
