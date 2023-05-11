import styled, { keyframes, css } from "styled-components";

const sharedContent = css`
  z-index: 1;
  margin-top: 2rem;
  width: 30%;
  position: absolute;
  transition: opacity 2s ease-in-out;
  animation-duration: 4s;
  animation-timing-function: ease-in-out;

  font-size: 1.2rem;
  line-height: 1.5;

  h2 {
    font-size: 4rem;
    font-weight: 700;
    letter-spacing: 0.2rem;
  }

  p {
    margin-bottom: 0.5rem;
    text-indent: 1rem;
  }
`;

interface IHalfImageLeft {
  mxleft: number;
}

interface IHalfImageRight {
  mxright: number;
}

const moveFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
`;

const moveFromRight = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
`;

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding-top: 10vh;
  border-bottom: 10px solid black;
`;

export const HalfImageLeft = styled.div<IHalfImageLeft>`
  bottom: 0;
  position: absolute;
  animation: ${moveFromLeft} 3s ease-in-out;
  clip-path: ${(props) => `inset(0 ${props.mxleft}% 0 0)`};
  transition: clip-path 3s ease-out, margin 0.5s ease-in-out;
  border: none;
  margin-left: ${({ mxleft }) =>
    mxleft > 60 ? "-5%" : mxleft < 40 ? "5%" : "0"};
`;

export const HalfImageRight = styled.div<IHalfImageRight>`
  bottom: 0;
  position: absolute;
  animation: ${moveFromRight} 3s ease-in-out;
  clip-path: ${(props) => `inset(0 0 0 ${props.mxright}%)`};
  transition: clip-path 3s ease-out, margin 0.5s ease-in-out;
  border: none;
  margin-left: ${({ mxright }) =>
    mxright > 60 ? "5%" : mxright < 40 ? "-5%" : "0"};
`;

export const ContentLeft = styled.div<IHalfImageLeft>`
  ${sharedContent}
  left: 0;
  margin-left: 7rem;
  opacity: ${({ mxleft }) => mxleft < 40 && "0"};
  animation: ${moveFromLeft};
`;

export const ContentRight = styled.div<IHalfImageRight>`
  ${sharedContent}
  right: 0;
  margin-right: 7rem;
  opacity: ${({ mxright }) => mxright < 40 && "0"};
  transition: opacity 2s;
  animation: ${moveFromRight};
`;
