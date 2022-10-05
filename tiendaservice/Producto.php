<?php 
include_once("Conexion.php");

class Producto{
    var $id;
    var $nombre;
    var $precio;
    var $stock;
    var $estado;


    function __construct(){}


    function registrarProducto(){
        $sql="insert into producto(nombre,precio,stock,estado) values('$this->nombre',$this->precio,$this->stock,$this->estado)";
        $conexion = new Conexion();
        if($conexion->executeQuery($sql)){
            $conexion->close();
            return true;
        }
    }

    function actualizarProducto(){
        $sql= "update producto set nombre='$this->nombre', precio=$this->precio, stock=$this->stock, estado = '$this->estado' where id =$this->id";
        $conexion = new Conexion();
        if($conexion->executeQuery($sql)){
            $conexion->close();
            return true;
        }
        
    }

    
    function eliminarProducto(){
        $sql= "update producto set estado='0' where id= $this->id ";
        $conexion = new Conexion();
        if($conexion->executeQuery($sql)){
            $conexion->close();
            return true;
        }
        
    }

    function consultarProductos(){
        $sql="select * from producto where estado = '1'";
        $conexion = new Conexion();
        $res = $conexion->executeQuery($sql);
        $productos = array();

        while($p = $res->fetch_object()){
            array_push($productos,$p);
        }
        $conexion->close();

        return $productos;
    }
    function consultarProductoLike($param){
        $sql="select * from producto where nombre like '%$param%' and estado = '1'";
        $conexion = new Conexion();
        $res = $conexion->executeQuery($sql);
        $productos = array();
        while($p = $res->fetch_object()){
            array_push($productos,$p);
        }
        $conexion->close();

        return $productos;
    }

}


?>