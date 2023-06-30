import "./ProductData.css";

const ProductData = ({ cocktail }) => {
  return (
    <>
      <div className="ProductData">
        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
        <p> {cocktail.strDrink}</p>
      </div>
    </>
  );
};

export default ProductData;
