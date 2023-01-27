import "./ProductsList.css";
import { currencyArr } from "./ProductsList";
type Props = {
  title: string;
  desc: string;
  price: number;
  addProductToCart: (price: number) => void;
  currencyK: number;
};
const Product = ({
  title,
  desc,
  price,
  addProductToCart,
  currencyK,
}: Props) => {
  return (
    <>
      {" "}
      <div className="child">
        <h4>{title}</h4>
        <p>{desc}</p>
        <h5>
          {`${price * currencyArr[currencyK].k} ${
            currencyArr[currencyK].currency
          }`}
        </h5>
        <button onClick={() => addProductToCart(price)}>buy</button>
      </div>
    </>
  );
};
export default Product;
