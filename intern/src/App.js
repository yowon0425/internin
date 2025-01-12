import './App.css';
import ProductCard from './ProductCard';

function App() {
  const sampleProduct = { name: '셔츠', price: '25,000', image: 'https://sitem.ssgcdn.com/71/94/29/item/1000589299471_i1_1200.jpg' };
  return (
    <div className="App">
      <ProductCard product={sampleProduct} />;
    </div>
  );
}

export default App;
