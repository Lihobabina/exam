import productsArray from "../../utils/productsArray";
import Product from "./Product";
import "./ProductsList.css";
type Products = {
  id: number;
  title: string;
  desc: string;
  price: number;
  currency: string;
};
type Props = {
  addProductToCart: (price: number) => void;
  cartData: {
    totalPrice: number;
  };
  currencyK: number;
};
export const currencyArr = [
  {
    currency: "USD",
    k: 1,
  },
  {
    currency: "EUR",
    k: 0.93,
  },
  {
    currency: "UAH",
    k: 40,
  },
  {
    currency: "ZL",
    k: 4.4,
  },
];
const ProductsList = ({ addProductToCart, cartData, currencyK }: Props) => {
  return (
    <>
      <div className="container">
        {productsArray.map(({ title, desc, price }: Products) => (
          <Product
            title={title}
            desc={desc}
            price={price}
            addProductToCart={addProductToCart}
            currencyK={currencyK}
          />
        ))}
      </div>
      <h2>
        Total {cartData.totalPrice * currencyArr[currencyK].k}{" "}
        {currencyArr[currencyK].currency}
      </h2>
    </>
  );
};
export default ProductsList;
