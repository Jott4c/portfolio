import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #292929;
  display: flex;
  padding-left: 10%;

  .image-box {
    margin-left: auto;
    height: 100%;

    @media screen and (max-width: 900px) {
      display: none;
    }
  }
  .stack-box {
    margin-top: 15vh;
    width: 50%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 1rem;
    color: #d0d0d0;
    font-size: 5rem;

    @media screen and (max-width: 900px) {
      width: 90%;
      justify-self: center;
    }
  }
`;

export const IconWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

export const Text = styled.div`
  position: absolute;
  top: -3rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: white;
  padding: 0.5rem;
  font-size: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  pointer-events: none;
  border-radius: 5px;

  ${IconWrapper}:hover & {
    opacity: 1;
    pointer-events: auto;
  }
`;
