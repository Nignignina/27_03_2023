import "./ProductSection.css";
import { useState, useEffect } from "react";
import { GET } from "../utils/http";
const ProductSection = ({ productSection, setProductSection }) => {
  const [productData, setProductData] = useState({});
  const [isHidde, setIsHidden] = useState(false);

  const onHandleClick = () => {
    setIsHidden(true);
    setTimeout(() => {
      setProductSection("");
    }, 300);
  };

  useEffect(() => {
    GET("?s=" + productSection).then((data) => {
      console.log(data);
      setProductData(data.drinks[0]);
    });
  }, []);

  const ingredients = Object.entries(productData)
    .filter(
      ([ingredients, values]) =>
        ingredients.startsWith("strIngredient") && values !== null
    )
    .map(([ingredients, values]) => values);

  return (
    <>
      <div className={`ProductSection ${isHidde ? "fade-out" : ""}`}>
        <div className="ProductSection_main">
          <button className="ProductSection_close" onClick={onHandleClick}>
            X
          </button>
          <div className="content_img">
            <img src={productData.strDrinkThumb} alt={productData.strDrink} />
          </div>
          <div className="productSections_text_main">
            <h2> {productData.strDrink} </h2>
            <p> {productData.strAlcoholic} </p>
          </div>
        </div>

        <div className="productSections_text">
          {/* <div className="productSections_text_Interaction">
            {" "}
            Bevi per dopo{" "}
          </div> */}
        </div>
        <div className="productSections_ingredients ">
          <p className="ingredient_title">ingredienti</p>
          <ul className="list_ingredients">
            {" "}
            {ingredients.map((ingredient) => (
              <li key={ingredient.idDrink} className="ingredient">
                {" "}
                {ingredient}
              </li>
            ))}{" "}
          </ul>
        </div>
        <p className="description"> {productData.strInstructionsIT}</p>
      </div>
    </>
  );
};
export default ProductSection;
