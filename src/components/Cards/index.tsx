import { useContext } from "react";
import { toast } from "react-toastify";

import bag from "../../assets/shopping-bag.png";
import { iProducts, Productscontext } from "../../contexts/ProductContext";
import { DivImage, DivInfos, List } from "./style";

export interface CardProductsProps {
  product: iProducts;
}

const Card = ({ product }: CardProductsProps) => {
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

  return (
    <List>
      <DivImage>
        <img src={product.photo} alt="Product" />
      </DivImage>
      <DivInfos>
        <h3>{product.name}</h3>
        <h4>{`R$${product.price}`}</h4>
      </DivInfos>

      <p>{product.description}</p>

      <button onClick={AddToCart}>
        <img src={bag} alt="bag" />
        COMPRAR
      </button>
    </List>
  );
};

export default Card;
