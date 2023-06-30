import { useState } from "react";
import ProductSection from "./components/productSection";
import ProductList from "./components/ProductList/ProductList";
import "./App.css";

function App() {
  const [productSection, setProductSection] = useState("gin tonic");
  return (
    <>
      <div className="App"> </div>
      <ProductList name={"rum"} />
      <ProductSection productSection={productSection} />
    </>
  );
}

export default App;
