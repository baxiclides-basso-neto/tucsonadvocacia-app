import styled from "styled-components";
import Image from "next/image";

export const TopSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const QuestionsBox = styled.section`
  color: #006400;
  border-radius: 4px;
  margin-bottom: 1.5rem;
  width: 100%;
  padding-top: 1rem;
  background-color: #f8f8f8;
  text-align: center;

  > div {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0.5rem;

    > h1 {
      text-align: center;
      margin-bottom: 1rem;
    }

    > h2 {
      text-align: center;
      margin-bottom: 1rem;
    }

    hr {
      width: 8rem;
      margin-bottom: 2rem;
      color: #006400;
      border-top: 3px solid #006400;
    }

    div {
      position: relative;
      padding-bottom: rem;
      min-height: 50px;

      &:hover {
        cursor: pointer;
      }

      > span {
        margin-right: 0.5rem;
        font-weight: bold;
      }

      > p {
        text-align: justify;
      }
    }
  }
`;

export const LegalDecisionsBox = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  > h1 {
    margin-top: 1rem;
    text-align: center;
    color: #006400;
  }
  p {
    text-align: justify;
    background-color: #fff;
    padding: 0.5rem;
    border-radius: 4px;

    span {
      font-weight: bolder;
    }
  }
`;
export const BottomSecBtnBox = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 320px;
  width: 320px;
  height: 3rem;
  margin-top: 2rem;
  margin-left: 0;
  margin-bottom: 3.2rem;
  padding: 0.5rem;
  border-radius: 4px;
  border: none;
  background-color: #25d366;
  color: #fff;
  font-weight: bold;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2);
    animation-name: growAndShrink;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    background-color: #fff;
    color: #25d366;
    border: 1px solid #25d366;
    cursor: pointer;
  }

  @keyframes growAndShrink {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.05);
    }
  }
`;

export const ContactButtonIcon = styled(Image)`
  margin-right: 1rem;
  filter: invert(1);
`;
