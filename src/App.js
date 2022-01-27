import "./App.css";
// import "./products.js";
import products from "./products.js";

function App() {
  const productsList = products.map((product) => (
    <div>
      <img
        alt={`Product's Image (${product.name})`}
        src={product.image}
        className="prod-image"
      />
      <h3 className="text prod-text">{product.name}</h3>
      <p className="text prod-text">{product.price}</p>
    </div>
  ));
  return (
    <div>
      <h1 className="text">meds4u</h1>
      <h4 className="text">get ur meds</h4>
      <img
        alt="Pharmacy Shop"
        src="https://globalcarehospital.com/wp-content/uploads/2020/04/arredi-farmacie-min-olcdbjm9lkfarlthxu7qceilefhwmv8ravp8czhnr4-1024x512.jpg"
        className="shop-image"
      />
      <div className="row">{productsList}</div>
    </div>
  );
}

export default App;
