import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelo/producto';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

  public producto : Producto;
  public flag : boolean = false;

  constructor(public productoService: ProductoService) {
    this.producto = {
      id: 0,
      nombre: '',
      precio: 0,
      stock: 0,
      estado: 0,
    };
  }

  ngOnInit(): void {
  }

  public actualizarProducto(){
    console.log(this.producto);
    this.productoService.actualizarProducto(this.producto).subscribe(
      (data) => {
        alert('Producto actualizado!');
      },
      (error) => {
        console.log(error);
      }
    );
      this.flag = false;
  }

  public abrirFormulario(producto: Producto){
    this.producto = producto;
    this.flag = true;
  }

  public cerrarFormulario(){
    this.flag = false;
  }

}
