import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  padding-top: 10vh;

  h2 {
    font-size: 4rem;
    font-weight: 900;
    letter-spacing: 1rem;
    color: #ff266a;
  }
  .socias-box {
    width: 50%;
    height: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
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
    width: 50%;
    height: 90%;
    margin-left: auto;
    align-self: flex-end;
  }

  .content-box {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 3rem;
  }
`;
