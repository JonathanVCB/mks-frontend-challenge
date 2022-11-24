import { useContext } from "react";
import Card from "../../components/Cards";
import Cart from "../../components/cart";
import { iProducts, Productscontext } from "../../contexts/ProductContext";
import { ContainerList, MainContainer } from "./style";

const HomePage = () => {
  const { products, showModal } = useContext(Productscontext);

  return (
    <MainContainer>
      <ContainerList>
        {products.map((elem: iProducts) => (
          <Card key={elem.id} product={elem} />
        ))}
      </ContainerList>
      {showModal && <Cart />}
    </MainContainer>
  );
};

export default HomePage;
