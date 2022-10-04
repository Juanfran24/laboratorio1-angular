import { Injectable } from '@angular/core';
import { Producto } from '../modelo/producto';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  public productos : Producto[] = [];
  private agregarProductoSubject = new Subject<Producto>();
  agregarProductoObservable = this.agregarProductoSubject.asObservable();

  constructor(private http: HttpClient) { }

  //servicio para actualizar listado de productos
  public agregarProducto(producto : Producto){
    this.productos.push(producto);
    this.agregarProductoSubject.next(producto);
  }

  public getProductos(){
     //defino la url donde esta el servicio
     let  url ='http://localhost/tiendaservice/ProductoService.php';
        let header=new HttpHeaders();
        header.append('Content-Type','aplication/json')
        header.append('Access-Control-Allow-Origin','http://localhost');

        return this.http.get<Producto[]>(url,{headers:header});
  }

  public crearProducto(producto : Producto){
    //defino la url donde esta el servicio
    let url ='http://localhost/tiendaservice/ProductoService.php';
       let header=new HttpHeaders();
       header.append('Content-Type','aplication/json');
       header.append('Access-Control-Allow-Methods','"POST, GET,DELETE,PUT"');
       header.append('Access-Control-Allow-Origin','http://localhost');
       return this.http.post(url,JSON.stringify(producto),{headers:header});
  }

  public actualizarProducto(producto : Producto){
      let url ='http://localhost/tiendaservice/ProductoService.php';
      let headers = new HttpHeaders();
      headers.append('Content-Type','aplication/json');
      headers.append('Access-Control-Allow-Methods','"POST, GET,DELETE,PUT"');
      headers.append('Access-Control-Allow-Origin','http://localhost');
      return this.http.put(url,JSON.stringify(producto), { headers });
  }

  public eliminarProducto(id : number){
    let url ='http://localhost/tiendaservice/ProductoService.php';
    let headers = new HttpHeaders();
    headers.append('Content-Type','aplication/json');
    headers.append('Access-Control-Allow-Methods','"POST, GET,DELETE,PUT"');
    headers.append('Access-Control-Allow-Origin','http://localhost');
    return this.http.delete(url + '?id=' + id, { headers });
  }


}
