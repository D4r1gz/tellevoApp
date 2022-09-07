import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { RouterLinkDelegateDirective } from '@ionic/angular/directives/navigation/router-link-delegate';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario:string;
  password:string;
  result:number;

  constructor(public toastController:ToastController, private router:Router) {}
  siguiente(){

    let navigationExtras: NavigationExtras={
      state:{usuario:this.usuario}
    }
    if(this.result==1 || this.result==2){
      this.router.navigate(['/login'])
    }else if(this.result==3){
      this.router.navigate(['/inicio'], navigationExtras)
    }

    
  }
  ngOnInit() {
  }
  validar(user: string, pasword: string){
    if(user ==null ){
      console.log("1")
      this.presentToast()
      return this.result=1;
      
    }else if (pasword==null) {
      console.log("2")
      this.presentToast()
      return this.result=2;
    } else {
      console.log("3")
      return this.result=3;
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

    todos(){
      this.validar(this.usuario, this.password)
      this.siguiente()
    }
}
