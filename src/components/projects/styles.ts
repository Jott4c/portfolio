import theme from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding-top: 10vh;
  display: flex;
  align-items: center;
  width: 90vw;
  height: 100vh;
  overflow: hidden;
  .swiper {
    padding-bottom: 3rem;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
  }

  .swiper-pagination-bullet-active {
    background-color: ${theme.colors.darkGray};
  }
`;

export const Card = styled.div`
  padding: 1rem 0.4rem;
  width: 17rem;
  height: 30rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;

  .image-box {
    margin: 0 auto;
    width: 90%;
    height: 12rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  .content-box {
    margin: 1rem auto;
    text-align: center;
    width: 90%;
    height: 15rem;
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
