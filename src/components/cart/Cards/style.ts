import styled from "styled-components";

export const CartCard = styled.li`
  width: 90%;
  margin: 0 auto;
  height: 220px;
  background-color: var(--White-0);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > h3 {
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
  }
  @media (min-width: 650px) {
    width: 80%;
  }
  @media (min-width: 800px) {
    width: 70%;
  }
  @media (min-width: 1024px) {
    width: 85%;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    position: relative;
    > h3 {
      width: 25%;
    }
  }
`;

export const DivImageCart = styled.div`
  width: 100%;
  height: 100px;
  position: relative;

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  > button {
    color: var(--Black-0);
    font-size: 2.2rem;
    position: absolute;
    top: -15px;
    right: -10px;
    background-color: unset;
    border: none;
  }
  @media (min-width: 1024px) {
    width: 20%;
    height: 100%;
    position: unset;
    > button {
      font-size: 0.875rem;
      background-color: var(--Black-0);
      color: var(--White-0);
      border-radius: 50%;
      top: 0;
      right: 0;
    }
    > button:hover {
      background-color: red;
      transform: scale(1.02);
    }
  }
`;

export const DivAmounthContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  > p {
    font-size: 0.938rem;
    font-weight: 700;
    color: var(--White-0);
    background-color: var(--Black-2);
    padding: 1rem;
    border-radius: 5px;
  }
  @media (min-width: 1024px) {
    width: 48%;
    height: 100%;
    align-items: center;
    > p {
      background-color: unset;
      color: var(--Black-0);
      font-size: 0.875rem;
    }
  }
`;

export const DivAmounth = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.3px solid #bfbfbf;
  border-radius: 4px;
  padding: 0.5rem;
  gap: 0.2rem;

  > button {
    font-size: 1.5rem;
    background-color: unset;
    border: none;
  }
  > h3 {
    font-size: 1.25rem;
    border-left: 0.3px solid #bfbfbf;
    border-right: 0.3px solid #bfbfbf;
  }
  @media (min-width: 1024px) {
    width: 50%;
    height: 100%;
  }
`;
