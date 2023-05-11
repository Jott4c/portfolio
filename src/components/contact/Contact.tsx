import { NextPage } from "next";
import leftImage from "../../assets/images/color.png";
import { Container } from "./styles";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { Nunito_Sans } from "next/font/google";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import whatsapp from "../../assets/images/whatsapp.png";
import linkedin from "../../assets/images/linkedin.png";
import Link from "next/link";

const nunito = Nunito_Sans({ weight: "300", subsets: ["latin"] });

export const Contact: NextPage = () => {
  return (
    <Container className={nunito.className}>
      <div className="content-box">
        <h2>CONTATOS</h2>
        <p>Entre em contato comigo através das redes sociais</p>
        <div className="socias-box">
          <Link
            href="https://www.facebook.com/Jrcunha123"
            target="_blank"
            className="facebook"
          >
            <Image src={facebook} alt="logo facebook" />
            <p>Facebook</p>
          </Link>
          <Link
            href="https://www.instagram.com/juniior.alencar/"
            target="_blank"
            className="instagram"
          >
            <Image src={instagram} alt="logo instagram" />
            <p>Instagram</p>
          </Link>
          <Link
            href="https://contate.me/jott4c"
            target="_blank"
            className="whatsapp"
          >
            <Image src={whatsapp} alt="logo whatsapp" />
            <p>Whatsapp</p>
          </Link>
          <Link
            href="https://www.linkedin.com/in/junior-alencar-b961b1236/"
            target="_blank"
            className="linkedin"
          >
            <Image src={linkedin} alt="logo linkedin" />
            <p>Linkedin</p>
          </Link>
        </div>
      </div>
      <Image src={leftImage} alt="autor" className="image-box" />
    </Container>
  );
};

export default Contact;
