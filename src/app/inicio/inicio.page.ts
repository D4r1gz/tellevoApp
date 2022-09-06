import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  usuario: any;
  constructor(private activeroute: ActivatedRoute, private router:Router) { 
    this.activeroute.queryParams.subscribe(params=>{
     if(this.router.getCurrentNavigation().extras.state){
      this.usuario=this.router.getCurrentNavigation().extras.state.usuario;
      console.log(this.usuario)
     } 
    });
  }
  ngOnInit() {
  }

}
