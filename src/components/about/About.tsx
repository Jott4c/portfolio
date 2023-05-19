import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Container, ImageBox, ContentBox } from "./styles";
import leftImage from "../../assets/images/color.png";
import rightImage from "../../assets/images/black.png";
import { NextPage } from "next";
import Typewriter from "../typewriter/Typewriter";

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

      if (maxValue > 1000) {
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
      <ContentBox mx={mxRight} side="left">
        <h2>Frontend.</h2>
        <p>
          Tenho experiência em desenvolvimento frontend com React, TypeScript e
          algumas bibliotecas, incluindo Redux, React Router e Styled
          Components. Ultimamente tenho me dedicado ao framework Next.js para
          criar aplicações web escaláveis e rápidas. Além disso, possuo
          habilidades em Git, GitHub e deploy de aplicações em diferentes
          ambientes. Estou sempre aprendendo e aprimorando minhas habilidades
          para criar soluções modernas e eficientes para os clientes e usuários
          finais.
        </p>
      </ContentBox>

      <ImageBox mx={mxLeft} side="left">
        <Image src={leftImage} alt="Imagem colorida do autor" />
      </ImageBox>
      <ImageBox mx={mxRight} side="right">
        <Image src={rightImage} alt="Imagem preto e branco do autor" />
      </ImageBox>
      <ContentBox mx={mxLeft} side="right">
        <h2>Backend.</h2>
        <p>
          Tenho habilidades em desenvolvimento backend com Node.js e Python,
          utilizando bibliotecas como Express, TypeORM e o framework Django. Com
          essas tecnologias, sou capaz de criar aplicações backend escaláveis e
          eficientes, incluindo a criação de APIs RESTful e a utilização de
          bancos de dados como PostgreSQL e MongoDB. Estou sempre em busca de
          novas formas de aprimorar minhas habilidades e conhecimentos em
          desenvolvimento de software.
        </p>
      </ContentBox>
      <ContentBox mx={mxLeft} side="center">
        <h2>Full Stack Developer.</h2>
        <Typewriter
          text="  Possuo experiência abrangente em desenvolvimento, tanto frontend
          quanto backend. No frontend, tenho experiência com React, TypeScript e
          algumas bibliotecas, incluindo Redux, React Router e Styled
          Components. Recentemente, tenho me dedicado ao framework Next.js para
          criar aplicações web escaláveis e rápidas. Quanto ao desenvolvimento
          backend, sou habilidoso com Node.js e Python, utilizando bibliotecas
          como Express, TypeORM e o framework Django. Com essas tecnologias, sou
          capaz de criar aplicações backend escaláveis e eficientes, incluindo a
          criação de APIs RESTful e a utilização de bancos de dados como
          PostgreSQL e MongoDB. Além disso, possuo habilidades em Git, GitHub e
          deploy de aplicações em diferentes ambientes. Estou sempre aprendendo
          e aprimorando minhas habilidades para criar soluções modernas e
          eficientes para os clientes e usuários finais."
          speed={50}
        />
      </ContentBox>
    </Container>
  );
};

export default About;
