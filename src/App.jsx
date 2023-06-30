import { useState } from "react";
import ProductSection from "./components/productSection";

import "./App.css";

function App() {
  const [productSection, setProductSection] = useState("gin tonic");
  return (
    <>
      <div className="App"> </div>
      <ProductSection productSection={productSection} />
    </>
  );
}

export default App;
