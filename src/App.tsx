import { AddProduct } from './components/AddProduct';
import { ContadorRed } from './components/ContadorRed';
import { Counter } from './components/Counter';
import { ListProducts } from './components/ListProducts';

import './App.css';

function App() {
  return (
    <>
      <h1>Hola mundo con ts !</h1>
      <br />
      <Counter />
      <br />
      <br />
      <ContadorRed />
      <div className="cointainer_productos">
        <AddProduct />
      </div>
    </>
  );
}

export default App;