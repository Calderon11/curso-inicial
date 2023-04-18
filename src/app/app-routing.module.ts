import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InicioComponent } from "./pages/inicio/inicio.component";
import { PaginaTablaComponent } from "./pages/pagina-tabla/pagina-tabla.component";

const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full'},  //direcciona directamente al inicio, automaticamente.
    { path: 'inicio', component: InicioComponent },        //Declara la ruta inicio.
    { path: 'tabla', component: PaginaTablaComponent }     //Declara la ruta de la pagina tabla.
];

@NgModule (
    {
        declarations: [],
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [RouterModule]
    }
)
export class AppRoutingModule {}