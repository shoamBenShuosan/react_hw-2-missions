import logo from './logo.svg';
import './App.css';
import Product from './comp/product';
import Cars from './comp/cars';

function App() {
  return (
    <div className='App'>
      <Product />
      <hr />
      <Cars />
    </div>
  );
}

export default App;
