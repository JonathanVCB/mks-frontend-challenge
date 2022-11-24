import styled from "styled-components";

export const CartModal = styled.section`
  width: 90%;
  height: 100vh;
  position: fixed;
  background-color: var(--Color-primary);
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.7s;

  > button {
    width: 100%;
    background-color: var(--Black-0);
    height: 80px;
    color: var(--White-0);
    border: none;
    font-size: 1.25rem;
    font-weight: 700;
  }
  @media (min-width: 1024px) {
    width: 35%;
    > button:hover {
      background-color: green;
    }
  }
`;

export const DivHeader = styled.div`
  padding: 2rem 1rem 1rem 1rem;
  width: 100%;
  display: flex;
  justify-content: space-around;

  > h5 {
    font-size: 1.688rem;
    font-weight: 700;
    color: var(--White-0);
  }

  > button {
    border: none;
    background-color: var(--Black-0);
    color: var(--Color-primary);
    border-radius: 50%;
    padding: 0.7rem;
    font-size: 2rem;
    font-weight: 400;
    transition: 0.7s;
  }
  @media (min-width: 1024px) {
    > h5 {
      width: 50%;
    }
    > button {
      color: var(--White-0);
      font-size: 1rem;
      width: 10%;
      height: 80%;
    }
    > button:hover {
      background-color: red;
      transform: scale(1.02);
    }
  }
`;

export const ListCart = styled.ul`
  width: 100%;
  max-height: 57%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: auto;
`;
