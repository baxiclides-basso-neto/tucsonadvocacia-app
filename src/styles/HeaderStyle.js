import styled from "styled-components";
import Image from "next/image";
import HeaderBackgroundImg from "../../public/headerbgImg.jpg"

export const HeaderWrapper = styled.div`
  position: relative;
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: -1;
  }

  background: url(${HeaderBackgroundImg.src});
  background-size: cover;
  background-position: center right;
`;

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 1rem 0.5rem;
  box-sizing: border-box;
  color: #fff;
`;

export const LogoSection = styled.section`
  display: flex;
  align-items: center;
`;


export const LogoText = styled.h1`
  font-size: 2.4rem;
  font-weight: bold;
  margin-left: 0.5rem;
`;

export const HeaderDescSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 2rem;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

export const SubTitle = styled.p`
  font-size: 1.4rem;
  margin-bottom: 3rem;
`;

export const ContactButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 300px;
  height: 4rem;
  padding: 1rem;
  border-radius: 5px;
  border: none;
  background-color: #007bff;
  color: #fff;
  font-size: 1.6rem;
  font-weight: bold;
  text-align: center;
  transition: all 0.3s ease;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  &:hover {
    transform: scale(1.05);
    transform-origin: center;
    background-color: #0062cc;
    cursor: pointer;
  }
`;

export const ContactButtonIcon = styled(Image)`
  margin-right: 1rem;
`;