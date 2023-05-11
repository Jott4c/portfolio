import React from "react";
import { FaGithub, FaShare } from "react-icons/fa";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";
import { Container, Content, Card } from "./styles";

import Image from "next/image";
import { NextPage } from "next";
import { IProps } from "@/interfaces";
import Slider from "react-slick";

const Projects: NextPage<IProps> = ({ projects }) => {
  const handleGoToProject = (url: string) => {
    window.open(url, "_blank");
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    nextArrow: <RxDoubleArrowRight />,
    prevArrow: <RxDoubleArrowLeft />,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <Content>
        <Slider {...settings}>
          {projects.map((project: any) => (
            <Card key={project.id}>
              <div className="image-box">
                <Image
                  src={project.description?.split("#")[1]}
                  alt="Project Image"
                  style={{
                    objectFit: "fill",
                    margin: "0 auto",
                    width: "100%",
                    height: "100%",
                    borderRadius: "8px",
                  }}
                  width={200}
                  height={200}
                />
              </div>
              <div className="content-box">
                <h2>{project.name}</h2>
                <div className="button-box">
                  <button onClick={() => handleGoToProject(project.html_url)}>
                    <FaGithub /> Github Code
                  </button>
                  {project.homepage && (
                    <button onClick={() => handleGoToProject(project.homepage)}>
                      <FaShare /> See demo
                    </button>
                  )}
                </div>

                <p>
                  Primary Language :
                  <span>
                    {project.language
                      ? project.language
                      : "Primary language not identified"}
                  </span>
                </p>
                <hr />
                <p>
                  {" "}
                  {project.description?.split("#")[0].substring(0, 100)}...
                </p>
              </div>
            </Card>
          ))}
        </Slider>
      </Content>
    </Container>
  );
};

export default Projects;
