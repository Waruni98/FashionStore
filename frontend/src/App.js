import data from './data';

function App() {
  return (
    <div>
      <header>
        <a href="/">Fashion Store</a>
      </header>
      <main>
        <h1>Featured products</h1>
        <div className="products">
        {data.products.map((product) => (
          <div className="product" key={product.slug}>
            <a href={`/product/${product.slug}`}>
            <img src={product.image} alt={product.name} />
            </a>
            <div className="product-infor">
              <a href ={`/product/${product.slug}`}>
            <p>{product.name}</p>
            </a>
            <p>{product.price}</p>
            <button>Add to Cart</button>
            </div>
          </div>
        ))}
        </div>
      </main>
    </div>
  );
}

export default App;
