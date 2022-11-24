import { useContext } from "react";
import { DivCartHeader, DivContainer, Header } from "./style";
import { Productscontext } from "../../contexts/ProductContext";
import { IoCart } from "react-icons/io5";

const MainHeader = () => {
  const { OpenCart, currentSale } = useContext(Productscontext);

  return (
    <Header>
      <DivContainer>
        <div>
          <h1>MKS</h1>
          <span>Sistemas</span>
        </div>
        <DivCartHeader>
          <button onClick={OpenCart}>
            <IoCart />
            <p>{currentSale.length}</p>
          </button>
        </DivCartHeader>
      </DivContainer>
    </Header>
  );
};

export default MainHeader;
