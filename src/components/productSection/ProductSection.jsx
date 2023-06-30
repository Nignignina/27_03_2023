import "./ProductSection.css";
import { useState, useEffect } from "react";
import { GET } from "./utils/http";

const ProductSection = ({ ProductSection }) => {
  // const mock = {
  //   idDrink: "11007",
  //   strDrink: "Margarita",
  //   strDrinkAlternate: null,
  //   strTags: "IBA,ContemporaryClassic",
  //   strVideo: null,
  //   strCategory: "Ordinary Drink",
  //   strIBA: "Contemporary Classics",
  //   strAlcoholic: "Alcoholic",
  //   strGlass: "Cocktail glass",
  //   strInstructions:
  //     "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
  //   strInstructionsES: null,
  //   strInstructionsDE:
  //     "Reiben Sie den Rand des Glases mit der Limettenscheibe, damit das Salz daran haftet. Achten Sie darauf, dass nur der äußere Rand angefeuchtet wird und streuen Sie das Salz darauf. Das Salz sollte sich auf den Lippen des Genießers befinden und niemals in den Cocktail einmischen. Die anderen Zutaten mit Eis schütteln und vorsichtig in das Glas geben.",
  //   strInstructionsFR: null,
  //   strInstructionsIT:
  //     "Strofina il bordo del bicchiere con la fetta di lime per far aderire il sale.\r\nAvere cura di inumidire solo il bordo esterno e cospargere di sale.\r\nIl sale dovrebbe presentarsi alle labbra del bevitore e non mescolarsi mai al cocktail.\r\nShakerare gli altri ingredienti con ghiaccio, quindi versarli delicatamente nel bicchiere.",
  //   "strInstructionsZH-HANS": null,
  //   "strInstructionsZH-HANT": null,
  //   strDrinkThumb:
  //     "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
  //   strIngredient1: "Tequila",
  //   strIngredient2: "Triple sec",
  //   strIngredient3: "Lime juice",
  //   strIngredient4: "Salt",
  //   strIngredient5: null,
  //   strIngredient6: null,
  //   strIngredient7: null,
  //   strIngredient8: null,
  //   strIngredient9: null,
  //   strIngredient10: null,
  //   strIngredient11: null,
  //   strIngredient12: null,
  //   strIngredient13: null,
  //   strIngredient14: null,
  //   strIngredient15: null,
  //   strMeasure1: "1 1/2 oz ",
  //   strMeasure2: "1/2 oz ",
  //   strMeasure3: "1 oz ",
  //   strMeasure4: null,
  //   strMeasure5: null,
  //   strMeasure6: null,
  //   strMeasure7: null,
  //   strMeasure8: null,
  //   strMeasure9: null,
  //   strMeasure10: null,
  //   strMeasure11: null,
  //   strMeasure12: null,
  //   strMeasure13: null,
  //   strMeasure14: null,
  //   strMeasure15: null,
  //   strImageSource:
  //     "https://commons.wikimedia.org/wiki/File:Klassiche_Margarita.jpg",
  //   strImageAttribution: "Cocktailmarler",
  //   strCreativeCommonsConfirmed: "Yes",
  //   dateModified: "2015-08-18 14:42:59",
  // };

  const [productData, setProductData] = useState({});

  useEffect(() => {
    GET("?s=margarita").then((data) => {
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
      <div className="ProductSection">
        <div className="ProductSection_main">
          <button className="ProductSection_close">X</button>
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

// import { useState, useEffect } from "react";
// import { GET } from "../../utils/HTTP";
// import "./index.css";

// const ProductSection = ({ productSection, setProductSection }) => {
//   const [productData, setProductData] = useState({});

//   useEffect(() => {
//     GET("?s=" + productSection).then((data) => setProductData(data.drinks[0]));
//   }, []);

//   const onHandleClick = () => setProductSection("");

//   return (
//     <div className="ProductSection">
//       <img src={productData.strDrinkThumb} alt={productData.strDrink} />
//       <div className="ProductSection__text">
//         <div className="ProductSection__text--heading">
//           <h1>{productData.strDrink}</h1>
//           <p>{productData.strAlcoholic}</p>
//         </div>
//         <p>❤️</p>
//       </div>
//       <ul className="ProductSection__ingredients">
//         <li>{productData.strIngredient1}</li>
//         <li>{productData.strIngredient2}</li>
//         <li>{productData.strIngredient3}</li>
//         <li>{productData.strIngredient4}</li>
//       </ul>
//       <p className="ProductSection__instruct">{productData.strInstructions}</p>
//       <button className="ProductSection__close--button" onClick={onHandleClick}>
//         ❌
//       </button>
//     </div>
//   );
