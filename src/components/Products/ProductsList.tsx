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
};

const ProductsList = ({ addProductToCart, cartData }: Props) => {
  return (
    <>
      <h2>Our shop page</h2>
      <button>USD</button>
      <button>EUR</button>
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
