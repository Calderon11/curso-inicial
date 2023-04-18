import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDataEmpleado } from 'src/app/interfaces/empleadosInterface';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-pagina-tabla',
  templateUrl: './pagina-tabla.component.html',
  styleUrls: ['./pagina-tabla.component.css']
})

export class PaginaTablaComponent implements OnInit {
  listEmpleado: IDataEmpleado[] = [];
  constructor(private rutas: Router,
              private empleadoService: EmpleadoService){
  }

  ngOnInit(): void {
    console.log('Hola estoy aqui desde ngOnInit');
    this.empleadoService.getAllEmployee().subscribe(
      (datos) => {
        console.log(datos);
        this.listEmpleado = datos.data;
      }, (error) => {
        console.log(error);
      }
    );
  }

  regresarInicio(){
    this.rutas.navigate(['inicio']);
  }

}  

