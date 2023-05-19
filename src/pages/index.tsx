import { GetStaticProps, NextPage } from "next";
import About from "../components/about/About";
import Projects from "../components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Contact from "@/components/contact/Contact";
import { IProject, IProps } from "@/interfaces";

import "swiper/css";
import "swiper/css/effect-cards";

import "swiper/css/pagination";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/footer";

export const Home: NextPage<IProps> = ({ projects }) => {
  return (
    <main>
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
      <Footer />
    </main>
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
