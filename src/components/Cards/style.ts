import styled from "styled-components";

export const List = styled.li`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  transition: 0.7s;
  :hover {
    transform: scale(1.01);
  }

  > p {
    padding-left: 1rem;
    font-size: 0.625rem;
    font-weight: 300;
    color: var(--Black-3);
  }

  > button {
    background-color: var(--Color-primary);
    border: none;
    width: 100%;
    padding: 0.5rem;
    border-radius: 0px 0px 8px 8px;
    color: var(--White-0);
    font-size: 0.875rem;
    font-weight: 600;
    display: flex;
    justify-content: center;
    gap: 1rem;
    transition: 0.7s;
  }

  > button:hover {
    background-color: green;
  }
  > button > img {
    object-fit: contain;
  }

  @media (min-width: 600px) {
    width: 90%;
    margin: 0 auto;
  }
  @media (min-width: 800px) {
    width: 80%;
  }
  @media (min-width: 1024px) {
    width: 22%;
  }
`;

export const DivImage = styled.div`
  width: 100%;
  height: 200px;
  max-height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const DivInfos = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  > h3 {
    font-size: 1rem;
    font-weight: 400;
    color: var(--Black-3);
  }
  > h4 {
    font-size: 0.938rem;
    font-weight: 700;
    color: var(--White-0);
    background-color: var(--Black-2);
    padding: 0.5rem;
    border-radius: 5px;
  }
`;
