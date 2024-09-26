import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #f8f8f8;
  border-top: 1px solid #ccc;

  p {
    margin: 5px 0;
  }

  a {
    color: #333;
    text-decoration: none;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
`;
