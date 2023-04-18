import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
nombre = 'Cindy';
apellido = 'Calderon';
loadingVisible=false;

constructor(private ruta: Router){

}


visualizarLoading(){
  this.loadingVisible = true;
  //Codigo de loading de 2 segundos.
  setTimeout(() => {
    this.loadingVisible = false;
  }, 2000);
}

irPaginaTabla(){
  this.ruta.navigate(['tabla']);
}

}
