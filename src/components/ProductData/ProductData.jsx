import "./ProductData.css";

const ProductData = ({ cocktail, setProductSection }) => {
  const onHandleclick = () => setProductSection(cocktail.strDrink);

  return (
    <>
      <div className="ProductData" onClick={onHandleclick}>
        <div className="ProductData_img">
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
        </div>
        <div className="ProductData_title">
          {" "}
          <p> {cocktail.strDrink}</p>
        </div>
      </div>
    </>
  );
};

export default ProductData;
