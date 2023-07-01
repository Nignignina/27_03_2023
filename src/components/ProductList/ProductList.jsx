import "./ProductList.css";
// import { GET } from "../productSection/utils/http";
import { useState, useEffect } from "react";
import ProductData from "../ProductData/ProductData";

const ProductList = ({ name, setProductSection }) => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + name)
      .then((res) => res.json())
      .then((data) => setListData(data.drinks));
  }, []);

  return (
    <>
      {" "}
      <div className="wrapper_productlist">
        <h2>{name}</h2>
        <div className="ProductList">
          {listData.map((cocktail) => (
            <ProductData
              cocktail={cocktail}
              key={cocktail.idDrink}
              setProductSection={setProductSection}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
