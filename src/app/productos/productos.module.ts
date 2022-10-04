import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { ListadoComponent } from './listado/listado.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ActualizarComponent } from './actualizar/actualizar.component';

@NgModule({
  declarations: [
    RegistroComponent,
    ListadoComponent,
    ActualizarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [
    RegistroComponent,
  ],
})
export class ProductosModule{}
