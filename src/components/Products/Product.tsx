import "./ProductsList.css";

type Props = {
  title: string;
  desc: string;
  price: number;
  addProductToCart: (price: number) => void;
  cartData: {
    totalPrice: number;
    currency: string;
  };
};
const Product = ({ title, desc, price, addProductToCart, cartData }: Props) => {
  return (
    <>
      {" "}
      <div className="child">
        <h4>{title}</h4>
        <p>{desc}</p>
        <h5>
          {price} {cartData.currency}
        </h5>
        <button onClick={() => addProductToCart(price)}>buy</button>
      </div>
    </>
  );
};
export default Product;
