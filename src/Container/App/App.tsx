import ButtonsList from "../../components/ButtonsList/ButtonsList";
import ProductsList from "../../components/Products/ProductsList";
import { useState } from "react";

type CartData = {
  totalPrice: number;
  currency: string;
};
type Props = {};
const App = (props: Props) => {
  const [cartData, setCartData] = useState<CartData>({
    totalPrice: 0,
    currency: " UAH",
  });

  const addProductToCart = (price: number) => {
    setCartData((prevState: CartData) => ({
      totalPrice: prevState.totalPrice + price,
      currency: "UAH",
    }));
  };
  const changeEur = () => {
    setCartData((prevState: CartData) => ({
      totalPrice: prevState.totalPrice * 0.025,
      currency: "EUR",
    }));
  };
  const changeUsd = () => {
    setCartData((prevState: CartData) => ({
      totalPrice: prevState.totalPrice * 0.027,
      currency: "USD",
    }));
  };

  return (
    <>
      <ButtonsList />
      <ProductsList
        cartData={cartData}
        addProductToCart={addProductToCart}
        changeEur={changeEur}
        changeUsd={changeUsd}
      />
    </>
  );
};
export default App;
