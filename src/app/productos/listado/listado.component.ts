import { Component, Input } from '@angular/core';
import { Producto } from 'src/app/modelo/producto';
import { ProductoService } from 'src/app/servicios/producto.service';
import { ActualizarComponent } from '../actualizar/actualizar.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent {
  @Input('productos') public productos: Producto[] = [];
  @Input() formulario : ActualizarComponent | undefined;

  constructor(public productoService: ProductoService) {}

  ngOnInit(): void {
    this.productoService.agregarProductoObservable.subscribe(
      (data: Producto) => {
        this.productos.push(data);
      }
    );
  }

  public abrirFormulario(producto: Producto) {
    this.formulario?.abrirFormulario(producto);
  }

  public eliminarProducto(id: number) {
    this.productoService.eliminarProducto(id).subscribe(
      (data) => {
        alert('Producto eliminado!');
        this.productos = this.productos.filter((producto) => producto.id != id);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
