import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/axios";

interface iProductsProviderProps {
  children: ReactNode;
}
export interface iProducts {
  brand: string;
  createdAt: string;
  description: string;
  id: number;
  name: string;
  photo: string;
  price: string | number;
  updatedAt: string;
  cart: number;
}

interface iProductsValues {
  products: iProducts[];
  setProducts: React.Dispatch<React.SetStateAction<iProducts[]>>;
  currentSale: iProducts[];
  setCurrentSale: React.Dispatch<React.SetStateAction<iProducts[]>>;
  cartTotal: number;
  setCartTotal: React.Dispatch<React.SetStateAction<number>>;
  showModal: boolean;
  OpenCart: () => void;
  CloseCart: () => void;
}

export const Productscontext = createContext<iProductsValues>(
  {} as iProductsValues
);

function ProducutsProvider({ children }: iProductsProviderProps) {
  const [products, setProducts] = useState<iProducts[]>([]);
  const [currentSale, setCurrentSale] = useState<iProducts[]>([]);
  const [cartTotal, setCartTotal] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    api
      .get("products?page=1&rows=8&sortBy=name&orderBy=DESC")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  const OpenCart = (): void => {
    setShowModal(true);
  };
  const CloseCart = (): void => {
    setShowModal(false);
  };

  return (
    <Productscontext.Provider
      value={{
        products,
        setProducts,
        currentSale,
        setCurrentSale,
        cartTotal,
        setCartTotal,
        showModal,
        OpenCart,
        CloseCart,
      }}
    >
      {children}
    </Productscontext.Provider>
  );
}

export default ProducutsProvider;
