import axios from "axios";
import { useState } from "react"

interface ValuesProduct {
    nombre: string;
    precio: string;
    id?: number;
}

const defaultValues: ValuesProduct = {
    nombre: '',
    precio: '',
    id: 0
}

export const AddProduct = () => {

  const [valuesProduct, setvaluesProduct] = useState(
    defaultValues as ValuesProduct
  );

  // se alamacena en e estado de react os valores del formulario
  const handleChange = (event: any) => {
    event.persist();
    setvaluesProduct((valuesProduct) => ({
      ...valuesProduct,
      [event.target.name]: event.target.value,
    }));
  };

  // para agregar los datos en el enpoind 
  const handleSubmit = (event: any) => {
    event.persist();
    axios
      .post(`http://localhost:5000/productos`, valuesProduct)
      .then((data) => {
        console.log("peticon creada");
      });
  };

  return (
    <>
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Precio</label>
            <input type="text" name="precio" 
            onChange={handleChange} className="form-control" placeholder="Precio" />
          </div>
        </div>
        <br />
        <button type="submit" 
        onClick={handleSubmit} className="btn btn-primary">
          Guardar Datos
        </button>
      </form>
    </>
  );
};
