import styled from "styled-components";
import Image from "next/image";

export const BottomSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const QuestionsBox = styled.div`
  background-color: #f8f8f8;
  color: #006400;
  border-radius: 4px;
  margin-bottom: 2.5rem;
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;

  > h1 {
    text-align: center;
  }

  div {
    padding: 1rem;
    padding-bottom: 1.5rem;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
    min-height: 40px;

    &:hover {
      cursor: pointer;
    }

    > span {
      margin-right: 0.5rem;
      font-weight: bold;
    }
  }
`;

export const LegalDecisionsBox = styled.div`
  > h1 {
    margin-top: 2rem;
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
  margin-top: 1rem;
  margin-left: 0;
  margin-bottom: 3rem;
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