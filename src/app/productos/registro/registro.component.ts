import { Component } from '@angular/core';
import { Producto } from 'src/app/modelo/producto';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent{
  public producto: Producto;
  public productos: Producto[] = [];

  constructor(public productoService: ProductoService) {
    this.productoService.getProductos().subscribe(
      (data: Producto[]) => {
        this.productos = data;
      }
    );
    this.producto = {
      id: 0,
      nombre: '',
      precio: 0,
      stock: 0,
      estado: 0
    }
  }

  public registrar() {
    this.productoService.crearProducto(this.producto).subscribe(
      (data: any) => {
        alert('¡producto creado!');
      }
    );
    this.productoService.agregarProducto(this.producto);
    this.producto = {
      id: 0,
      nombre: '',
      precio: 0,
      stock: 0,
      estado: 0
    }
  }

  public validator(){
    if(this.producto.nombre === '' || this.producto.precio === 0){
      return alert('Datos invalidos');
    }
    this.registrar();
  }

}
