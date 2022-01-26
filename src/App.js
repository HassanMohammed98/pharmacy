import "./App.css";
import "./products.js";
import products from "./products.js";

function App() {
  return (
    <div>
      <h1 className="text">meds4u</h1>
      <h4 className="text">get ur meds</h4>
      <img
        alt="Pharmacy Shop"
        src="https://globalcarehospital.com/wp-content/uploads/2020/04/arredi-farmacie-min-olcdbjm9lkfarlthxu7qceilefhwmv8ravp8czhnr4-1024x512.jpg"
        className="shop-image"
      />
      <div className="row">
        <div>
          <img
            alt="Pharmacy Shop"
            src={products[0].image}
            className="prod-image"
          />
          <h3 className="text prod-text">{products[0].name}</h3>
          <p className="text prod-text">{products[0].price}</p>
        </div>
        <div>
          <img
            alt="Pharmacy Shop"
            src={products[1].image}
            className="prod-image"
          />
          <h3 className="text prod-text">{products[1].name}</h3>
          <p className="text prod-text">{products[1].price}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
