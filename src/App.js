import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name: 'Laptop' ,price:37000},
    {name: 'Phone' ,price:26000},
    {name: 'Watch' ,price:10000},
    {name: 'Water bottle' ,price:10},
  ]
  return (
    <div className="App">
      {
        products.map(product=> <Product name={product.name} price={product.price}></Product>)
      }
      {/* <Product name='Laptop' price='10000'></Product>
      <Product name='Phone' price='9000'></Product>
       */}
      
    </div>
  );
}

function Product(props){
  return(
    <div className='pro'>
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price} </p>
    </div>
  )
}

export default App;
