import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 50px;
  background-color: var(--Color-primary);
`;

export const DivContainer = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    align-items: flex-end;
    gap: 2px;
  }

  > div > h1 {
    font-size: 2rem;
    font-weight: 600;
    color: var(--White-0);
  }
  > div > span {
    font-size: 1rem;
    font-weight: 300;
    color: var(--White-0);
  }
`;

export const DivCartHeader = styled.div`
  width: max-content;

  > button {
    background-color: var(--White-0);
    border: none;
    border-radius: 8px;
    transition: 0.7s;
    display: flex;
    width: 100%;
    padding: 0.6rem;
    gap: 0.5rem;
    justify-content: space-between;
    align-items: center;
  }
  > button:hover {
    transform: scale(1.1);
  }
  > button > p {
    font-size: 1rem;
    font-weight: 700;
    color: var(--black-0);
  }
`;
