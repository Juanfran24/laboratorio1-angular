import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelo/producto';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  @Input()
  public producto: Producto;
  public productos: Producto[] = [];

  constructor() {
    this.producto = {
      nombre: '',
      precio: 0,
      stock: 0,
      estado: true
    }
  }

  public registrar() {
    this.productos.push(this.producto);
    this.producto = {
      nombre: '',
      precio: 0,
      stock: 0,
      estado: true
    }
  }

  public vaciarArray() {
    this.productos = [];
  }

  ngOnInit(): void {
  }

}
