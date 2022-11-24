import styled from "styled-components";

export const MainContainer = styled.main`
  width: 80%;
  margin: 0 auto;
  padding-top: 2rem;
  @media (min-width: 1024px) {
    padding-top: 7rem;
  }
`;

export const ContainerList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
