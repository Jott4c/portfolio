import { GetStaticProps, NextPage } from "next";
import About from "../components/about/About";
import Projects from "../components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Contact from "@/components/contact/Contact";
import { IProject, IProps } from "@/interfaces";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Home: NextPage<IProps> = ({ projects }) => {
  return (
    <>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects projects={projects} />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetch("https://api.github.com/users/jott4c/repos");
  const projects: IProject[] = await data.json();
  return {
    props: {
      projects,
    },
  };
};

export default Home;
