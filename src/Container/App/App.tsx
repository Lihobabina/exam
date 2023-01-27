import ButtonsList from "../../components/ButtonsList/ButtonsList";
import ProductsList from "../../components/Products/ProductsList";
import { useState } from "react";

type CartData = {
  totalPrice: number;
};

type Props = {};
const App = (props: Props) => {
  const [cartData, setCartData] = useState<CartData>({
    totalPrice: 0,
  });

  const [currencyK, setCurrencyK] = useState(0);
  const addProductToCart = (price: number) => {
    setCartData((prevState: CartData) => ({
      totalPrice: prevState.totalPrice + price,
    }));
  };

  return (
    <>
      <ButtonsList />
      <h2>Our shop page</h2>
      <button onClick={() => setCurrencyK(0)}>USD</button>
      <button onClick={() => setCurrencyK(1)}>EUR</button>
      <button onClick={() => setCurrencyK(2)}>UAH</button>
      <button onClick={() => setCurrencyK(3)}>ZL</button>
      <ProductsList
        cartData={cartData}
        addProductToCart={addProductToCart}
        currencyK={currencyK}
      />
    </>
  );
};
export default App;
