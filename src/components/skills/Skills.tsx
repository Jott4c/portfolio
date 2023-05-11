import { NextPage } from "next";
import { SiPostgresql, SiTypescript } from "react-icons/si";
import { FaGit, FaPython } from "react-icons/fa";
import {
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNode,
  FaReact,
} from "react-icons/fa";
import { Container, IconWrapper, Text } from "./styles";
import Image from "next/image";
import skillsBg from "../../assets/images/skills-bg.png";

const stackData = [
  {
    title: "Node JS",
    img: FaNode,
  },
  {
    title: "JS",
    img: FaJs,
  },
  { title: "TypeScript", img: SiTypescript },
  { title: "Python", img: FaPython },
  { title: "PostgreSQL", img: SiPostgresql },
  {
    title: "React",
    img: FaReact,
  },
  {
    title: "HTML",
    img: FaHtml5,
  },
  {
    title: "CSS",
    img: FaCss3Alt,
  },
  { title: "Docker", img: FaDocker },
  { title: "Git", img: FaGit },
];

const Skills: NextPage = () => {
  return (
    <Container>
      <div className="stack-box">
        {stackData.map((stack) => (
          <IconWrapper key={stack.title}>
            <stack.img />
            <Text>{stack.title}</Text>
          </IconWrapper>
        ))}
      </div>
      <Image src={skillsBg} alt="bg" className="image-box" />
    </Container>
  );
};

export default Skills;
