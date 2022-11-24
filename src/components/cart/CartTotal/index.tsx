import { useContext } from "react";
import { Productscontext } from "../../../contexts/ProductContext";

import { DivTotalCart } from "./style";

const TotalMoney = () => {
  const { currentSale, cartTotal, setCartTotal } = useContext(Productscontext);

  setCartTotal(
    currentSale.reduce((acc, att) => acc + Number(att.price) * att.cart, 0)
  );

  return (
    <DivTotalCart>
      <h5>Total:</h5>
      <p>R${cartTotal}</p>
    </DivTotalCart>
  );
};

export default TotalMoney;
