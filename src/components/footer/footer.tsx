import { Container, FooterSection } from './styles';

const Footer = () => {
  return (
    <Container>
      <FooterSection>
        <p>© 2023 Junior Alencar</p>
        <p>CNPJ: 56.938.363/0001-27</p>
      </FooterSection>
      <FooterSection>
        <p>Endereço:</p>
        <p>Rua Berta Lúcia, Jardim Aero Rancho</p>
        <p>Campo Grande, MS - 79083-740</p>
      </FooterSection>
      <FooterSection>
        <p>
          Email: <a href="mailto:jalencar150@gmail.com">jalencar150@gmail.com</a>
        </p>
      </FooterSection>
    </Container>
  );
};

export default Footer;
