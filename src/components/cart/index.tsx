import { useContext } from "react";
import { iProducts, Productscontext } from "../../contexts/ProductContext";
import CardCart from "./Cards";
import TotalMoney from "./CartTotal";
import { CartModal, DivHeader, ListCart } from "./style";

const Cart = () => {
  const { CloseCart, currentSale } = useContext(Productscontext);

  return (
    <CartModal>
      <DivHeader>
        <h5>Carrinho de compras</h5>
        <button onClick={CloseCart}>X</button>
      </DivHeader>

      <ListCart>
        {currentSale.map((elem: iProducts) => (
          <CardCart key={elem.id} product={elem} />
        ))}
      </ListCart>

      <TotalMoney />

      <button>Finalizar Compra</button>
    </CartModal>
  );
};

export default Cart;
