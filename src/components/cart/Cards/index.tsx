import {
  CartCard,
  DivAmounth,
  DivAmounthContainer,
  DivImageCart,
} from "./style";
import { useContext } from "react";

import { CardProductsProps } from "../../Cards";
import { iProducts, Productscontext } from "../../../contexts/ProductContext";
import { toast } from "react-toastify";

const CardCart = ({ product }: CardProductsProps) => {
  const { currentSale, setCurrentSale } = useContext(Productscontext);

  const AddToCart = () => {
    if (currentSale?.some((elem) => elem.id === product.id)) {
      const newArr = currentSale.map((elem) => {
        if (product.id === elem.id && elem.cart) {
          elem.cart += 1;
        }
        return elem;
      });
      setCurrentSale(newArr);
    } else {
      setCurrentSale([...currentSale, { ...product, cart: 1 }]);
    }
    toast.success("Produto adcionado com sucesso");
  };

  const RemoveItenCart = () => {
    console.log(product.cart);
    if (product.cart) {
      const newArr = currentSale?.map((elem: iProducts) => {
        if (product.id === elem.id) {
          elem.cart -= 1;
        } else {
          return elem;
        }

        return elem;
      });

      setCurrentSale(newArr.filter((elem) => elem.cart > 0));
      toast.warn("Produto removido com sucesso");
    }
  };

  const RemoveItenCompleteCart = () => {
    const newArr = currentSale?.filter((elem) => {
      return elem.id !== product.id;
    });

    setCurrentSale(newArr);
    toast.warn("Produto removido com sucesso");
  };

  return (
    <CartCard>
      <DivImageCart>
        <img src={product.photo} alt="produto" />
        <button onClick={RemoveItenCompleteCart}>X</button>
      </DivImageCart>
      <h3>{product.name}</h3>
      <DivAmounthContainer>
        <DivAmounth>
          <button onClick={RemoveItenCart}>-</button>
          <h3>{product.cart}</h3>
          <button onClick={AddToCart}>+</button>
        </DivAmounth>
        <p>{`R$${Number(product.price) * product.cart}`}</p>
      </DivAmounthContainer>
    </CartCard>
  );
};

export default CardCart;
