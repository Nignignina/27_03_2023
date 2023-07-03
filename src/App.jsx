import { useState } from "react";
import ProductSection from "./components/productSection";
import ProductList from "./components/ProductList/ProductList";
import "./App.css";
import Contacts from "./components/Contacts/Contacts";
import Filters from "./components/Filters";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [productSection, setProductSection] = useState("");
  const [categoryList, setCategoryList] = useState([
    { name: "rum", id: 1, checked: true },
    { name: "tequila", id: 2, checked: true },
    { name: "vodka", id: 3, checked: true },
  ]);

  const onRender = () => {
    switch (productSection) {
      case "contacts":
        return (
          <div className="App__contacts">
            <Contacts />
          </div>
        );

      case "":
        return (
          <>
            <Filters
              categoryList={categoryList}
              setCategoryList={setCategoryList}
            />
            {categoryList
              .filter((category) => category.length > 1)
              .map((category, i) => (
                <ProductList
                  name={category}
                  setProductSection={setProductSection}
                  key={i}
                />
              ))}
          </>
        );
      default:
        return (
          <ProductSection
            productSection={productSection}
            setProductSection={setProductSection}
          />
        );
    }
  };

  return (
    <div className="App">
      <div className="App">
        <Navbar setProductSection={setProductSection} />
        {onRender()}
      </div>
    </div>
  );
}

export default App;
