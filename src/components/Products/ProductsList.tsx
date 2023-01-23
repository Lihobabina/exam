import Product from "./Product";
import productsArray from "../../utils/productsArray";
import "./ProductsList.css";
type Products = {
  title: string;
  desc: string;
  price: number;
};
type Props = {
  addProductToCart: (price: number) => void;
  cartData: {
    totalPrice: number;
    currency: string;
  };
  changeEur: () => void;
  changeUsd: () => void;
};

const ProductsList = ({
  addProductToCart,
  cartData,
  changeEur,
  changeUsd,
}: Props) => {
  return (
    <>
      <h2>Our shop page</h2>
      <button onClick={() => changeUsd()}>USD</button>
      <button onClick={() => changeEur()}>EUR</button>
      <button>UAH</button>
      <button>ZL</button>

      <div className="container">
        {productsArray.map(({ title, desc, price }: Products) => (
          <Product
            title={title}
            desc={desc}
            price={price}
            addProductToCart={addProductToCart}
            cartData={cartData}
          />
        ))}
      </div>
      <h2>
        Total {cartData.totalPrice} {cartData.currency}{" "}
      </h2>
    </>
  );
};
export default ProductsList;
