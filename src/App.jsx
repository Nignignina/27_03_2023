import { useState } from "react";
import ProductSection from "./components/productSection";
import ProductList from "./components/ProductList/ProductList";
import "./App.css";

function App() {
  const [productSection, setProductSection] = useState("");
  return (
    <div className="App">
      {productSection ? (
        <ProductSection
          productSection={productSection}
          setProductSection={setProductSection}
        />
      ) : (
        <>
          <ProductList name={"rum"} setProductSection={setProductSection} />
        </>
      )}
    </div>
  );
}

export default App;
