import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Container,
  ContentRight,
  ContentLeft,
  HalfImageLeft,
  HalfImageRight,
} from "./styles";
import leftImage from "../../assets/images/color.png";
import rightImage from "../../assets/images/black.png";
import { NextPage } from "next";

const About: NextPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [load, setload] = useState(false);
  const [mxLeft, setMxLeft] = useState(50);
  const [mxRight, setMxRight] = useState(50);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (load) {
      const maxValue = containerRef.current?.offsetWidth || 0;
      const currentValue = e.clientX - (containerRef.current?.offsetLeft || 0);
      const mouseValue = (currentValue / maxValue) * 100 || 0;

      if (mouseValue > 60) {
        setMxLeft(100);
        setMxRight(0);
      } else if (mouseValue < 40) {
        setMxLeft(0);
        setMxRight(100);
      } else {
        setMxLeft(50);
        setMxRight(50);
      }
    }
  };

  const handleMouseLeave = () => {
    setMxLeft(50);
    setMxRight(50);
  };

  useEffect(() => {
    setTimeout(() => {
      setload(true);
    }, 5000);
  }, []);

  return (
    <Container
      ref={containerRef}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <ContentLeft mxleft={mxRight}>
        <h2>Frontend.</h2>
        <p>
          Tenho experiência em desenvolvimento frontend com React, TypeScript e
          algumas bibliotecas, incluindo Redux, React Router e Styled
          Components. Ultimamente tenho me dedicado ao framework Next.js para
          criar aplicações web escaláveis e rápidas.
        </p>
        <p>
          Além disso, possuo habilidades em Git, GitHub e deploy de aplicações
          em diferentes ambientes. Estou sempre aprendendo e aprimorando minhas
          habilidades para criar soluções modernas e eficientes para os clientes
          e usuários finais.
        </p>
      </ContentLeft>

      <HalfImageLeft mxleft={mxLeft}>
        <Image src={leftImage} alt="Left" />
      </HalfImageLeft>
      <HalfImageRight mxright={mxRight}>
        <Image src={rightImage} alt="Right" />
      </HalfImageRight>
      <ContentRight mxright={mxLeft}>
        <h2>Backend.</h2>
        <p>
          Tenho habilidades em desenvolvimento backend com Node.js e Python,
          utilizando bibliotecas como Express, TypeORM e o framework Django.
        </p>
        <p>
          Com essas tecnologias, sou capaz de criar aplicações backend
          escaláveis e eficientes, incluindo a criação de APIs RESTful e a
          utilização de bancos de dados como PostgreSQL e MongoDB.
        </p>
        <p>
          Estou sempre em busca de novas formas de aprimorar minhas habilidades
          e conhecimentos em desenvolvimento de software.
        </p>
      </ContentRight>
    </Container>
  );
};

export default About;
