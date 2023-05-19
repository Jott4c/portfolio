import styled, { keyframes, css } from "styled-components";

interface IImageProps {
  mx: number;
  side: "left" | "right" | "center";
}

const moveFrom = (direction: "left" | "right") => keyframes`
  0% {
    transform: translateX(${direction === "left" ? "-70%" : "70%"});
  }
  100% {
    transform: translateX(0%);
  }
`;

const toAppear = keyframes`
  0% {
    opacity: 0;
  }
  70%{
    opacity: 0;
  }
  80% {
    opacity: 0.5;
  }
  100% {
    opacity: 1
  }

`;

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  padding-top: 10vh;
  border-bottom: 10px solid black;
`;

export const ImageBox = styled.div<IImageProps>`
  bottom: 0;
  position: absolute;
  animation: ${({ side }) => side !== "center" && moveFrom(side)} 3s ease-in-out;

  clip-path: ${({ mx, side }) =>
    side === "left" ? `inset(0 ${mx}% 0 0)` : `inset(0 0 0 ${mx}%)`};
  transition: clip-path 3s ease-out, margin 0.5s ease-in-out;
  border: none;
  margin-left: ${({ mx, side }) =>
    mx > 60
      ? side === "left"
        ? "-15%"
        : "15%"
      : mx < 40
      ? side === "left"
        ? "15%"
        : "-15%"
      : "0"};

  @media screen and (max-width: 800px) {
    ${({ side }) => side === "left" && "display: none"}
    clip-path: ${({ side }) => side === "left" && "none"}
    img {
      width: 20rem;
      height: 20rem;
    }
  }
`;

export const ContentBox = styled.div<IImageProps>`
  z-index: 1;
  position: absolute;
  ${({ side }) => (side !== "center" ? `${side}: 0` : "none")};
  ${({ side }) =>
    side === "left"
      ? "margin-left: 6rem"
      : side === "right"
      ? "margin-right: 6rem"
      : "margin: 0"};
  opacity: ${({ mx }) => mx < 40 && "0"};
  animation: ${toAppear} 4s ease-in-out;
  transition: opacity 2s ease-in-out;
  animation-duration: 4s;
  animation-timing-function: ease-in-out;
  margin-top: 2rem;
  width: 30%;
  text-align: center;

  h2 {
    font-size: 4rem;
    font-weight: 700;
    letter-spacing: 0.3rem;
  }

  p {
    margin-bottom: 0.3rem;
    font-size: 1.2rem;
    line-height: 1.5;
  }

  @media screen and (max-width: 900px) {
    ${({ side }) => side !== "center" && "display: none"};
    width: 80%;
    text-align: center;
    z-index: -99;

    h2 {
      font-size: 3rem;
      font-weight: 700;
      letter-spacing: 0.2rem;
    }

    p {
      font-size: 1.5rem;
    }
  }
  @media screen and (max-width: 760px) {
    animation: none;
    transition: none;
    opacity: 1;
    h2 {
      font-size: 2rem;
      font-weight: 700;
      letter-spacing: 0.2rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media screen and (min-width: 900px) {
    ${({ side }) => side === "center" && "display: none"}
  }
`;
