import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  width: 90vw;
  height: 100vh;
`;

export const Content = styled.div`
  height: 50%;
  width: 90vw;
  text-align: center;

  .slick-prev,
  .slick-next {
    color: black;
  }
  .slick-track {
    text-align: center;
  }
  .slick-slide {
    margin: 10px 0;
  }
`;

export const Card = styled.div`
  padding: 1rem 0.4rem;
  max-width: 17rem;
  min-width: 15rem;

  min-height: 25rem;
  max-height: 30rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  z-index: 1;

  .image-box {
    margin: 0 auto;
    width: 90%;
    height: 40%;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  .content-box {
    margin: 1rem auto;
    text-align: center;
    width: 90%;
    height: 50%;
  }
  .button-box {
    display: flex;
    flex-direction: column;
  }

  h2 {
    text-align: center;
    color: #ff266a;
    font-size: 1.3rem;
  }

  button {
    margin-top: 1rem;
    display: inline-block;
    border: none;
    cursor: pointer;
    background: transparent;
    font-size: 1rem;
  }

  p {
    margin: 0.4rem 0;
    text-align: center;

    span {
      font-weight: 600;
      margin-left: 0.1rem;
    }
  }
`;
