import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 80vh;

  h2 {
    align-self: center;
    font-size: 2.5rem;
    font-weight: 600;
  }
  p {
    font-size: 1.5rem;
  }

  a {
    text-decoration: none;
  }
  .socias-box {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;

    div {
      margin-top: 1rem;
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
    }
    @media screen and (max-width: 760px) {
      width: 100%;

      div {
        gap: 1rem;
        margin-top: 3rem;
      }
      p {
        font-size: 1rem;
      }
    }
  }
  .facebook {
    color: #3b5998;
  }
  .instagram {
    color: #e4405f;
  }
  .linkedin {
    color: #0a66c2;
  }
  .whatsapp {
    color: #25d366;
  }
  .facebook,
  .instagram,
  .linkedin,
  .whatsapp {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    p {
      font-size: 1rem;
      font-weight: 600;
      letter-spacing: 2px;
    }
    img {
      width: 50px;
      height: 50px;
    }
  }

  .image-box {
    height: 100%;
    width: 40%;
    margin-left: auto;

    img {
      width: 100%;
      height: 100%;
    }

    @media screen and (max-width: 760px) {
      margin: 0;
      width: 80%;
      height: 50%;
      img {
      }
    }
  }

  .content-primary {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 4rem 10% 0 10%;
    @media screen and (max-width: 760px) {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
`;
