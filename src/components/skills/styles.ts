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
  }

  .stack-box {
    margin-top: 3rem;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    color: #d0d0d0;
    font-size: 5rem;
    gap: 3rem;
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
