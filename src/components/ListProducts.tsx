import axios from 'axios';
import { useEffect, useState } from 'react';

interface Producto { 
  nombre: string,
  precio: string,
  id?: number
}

export const ListProducts = () => {

  const [product, setproduct] = useState([] as Producto[]);


  // Hook que se jecuta al iniziliciar el componente
  useEffect(() => {
    getProductos();
  }, []);

  const getProductos = async () => {
    const producto = await axios.get('http://localhost:5000/productos');
    setproduct(producto.data)
  }

  return (
    <>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">NOMBRE</th>
            <th scope="col">PRECIO</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            product.map((producto, index) => {
              return( 
                <>
                  <tr>
                    <td>{producto.id}</td>
                    <td>{producto.nombre}</td>
                    <td>{producto.precio}</td>
                  </tr>
                </>
              )
            })
          }
        </tbody>
        </table>
    </>
  )
}
