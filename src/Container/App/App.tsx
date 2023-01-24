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

  return (
    <>
      <ButtonsList />
      <ProductsList cartData={cartData} addProductToCart={addProductToCart} />
    </>
  );
};
export default App;
