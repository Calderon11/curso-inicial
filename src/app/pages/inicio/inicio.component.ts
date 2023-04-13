import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
nombre = 'Cindy';
apellido = 'Calderon';
loadingVisible=false;

visualizarLoading(){
  this.loadingVisible = true;
  //Codigo de loading de 2 segundos.
  setTimeout(() => {
    this.loadingVisible = false;
  }, 2000);
}

}
