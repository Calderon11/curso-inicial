import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
nombre = 'Cindy';
apellido = 'Calderon';
loadingVisible=false;
formUsuario!: FormGroup;  //Es del formulario.

constructor(private ruta: Router,
            private mensajes: MessageService){
}

ngOnInit(): void {
  this.buildFormulario();
}


// visualizarLoading(){
//   this.loadingVisible = true;
//   //Codigo de loading de 2 segundos.
//   setTimeout(() => {
//     this.loadingVisible = false;
//   }, 2000);
// }


//irPaginaTabla(){
visualizarLoading(){  
  this.ruta.navigate(['tabla']);
}

buildFormulario(){
  this.formUsuario = new FormGroup(
    {
      nombre: new FormControl('',[Validators.required]),
      apellido: new FormControl('',[Validators.required])
    }
  );
}


verficar(){
  console.log(this.formUsuario);
  if (this.formUsuario.valid){
    this.mensajes.add({ severity: 'success', summary: 'Formulario Correcto', detail: 'Exito' });
  } else {
    this.mensajes.add({ severity: 'error', summary: 'Error', detail: 'Por favor llene los campos requeridos' });
  }
}

}
