import styled from "styled-components";

export const Footer = styled.footer`
  border-top: 1px solid #000;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;

  > h4 {
    padding: 0.5rem;
    margin-top: 0.5rem;
    margin-bottom: 0;
  }

  > div {
    display: flex;
    flex-direction: column;

    > div {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      padding: 0.5rem;

      > span {
        font-size: 1rem;
      }
    }
  }
  h5 {
    margin-top: 0.5rem;
    text-align: center;
  }

  @media (min-width: 769px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
