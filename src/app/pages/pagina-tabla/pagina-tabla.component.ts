import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDataEmpleado } from 'src/app/interfaces/empleadosInterface';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-pagina-tabla',
  templateUrl: './pagina-tabla.component.html',
  styleUrls: ['./pagina-tabla.component.css']
})

export class PaginaTablaComponent implements OnInit {
  listEmpleado: IDataEmpleado[] = [];
  columnTabla: any;
  loading = false;

  constructor(private rutas: Router,
              private empleadoService: EmpleadoService,
              private mensajes: MessageService){
  }

  ngOnInit(): void {
    ///Es lo primero q se ejecuta.
    this.iniColumnaTabla(); 
    console.log('Hola estoy aqui desde ngOnInit');
    this.loading = true;

    this.empleadoService.getAllEmployee().subscribe(
      {
        next: (datos) => {
          console.log(datos);
          this.listEmpleado = datos.data;
          this.loading = false;
          this.mensajes.add({ severity: 'success', summary: 'Satisfactorio', detail: 'Exito' });
        },
        error: (err) => {
          console.log(err);
          this.loading = false;
          this.mensajes.add({ severity: 'error', summary: 'Error', detail: 'Hubo un problema' });
        }
      }      
    );
  }

  iniColumnaTabla(){
    this.columnTabla = [
      //Lista de Objetos.
      {
        field: 'id', header: 'ID'
      },
      {
        field: 'name', header: 'Nombre Empleado'
      },
      {
        field: 'salary', header: 'Salario Empleado'
      },
      {
        field: 'edad', header: 'Edad'
      }
    ];
  }



  regresarInicio(){
    this.rutas.navigate(['inicio']);
  }

}  

