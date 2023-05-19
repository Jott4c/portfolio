import React from "react";
import { FaGithub, FaShare } from "react-icons/fa";
import { Container, Card } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import { NextPage } from "next";
import { IProps } from "@/interfaces";
import { Pagination } from "swiper";

import NotFoundImage from "../../assets/images/notfound.png";

const Projects: NextPage<IProps> = ({ projects }) => {
  const handleGoToProject = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <Container>
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        loop={true}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
            centerInsufficientSlides: true,
          },
          768: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
        }}
      >
        {projects.map((project: any) => (
          <SwiperSlide key={project.id}>
            <Card>
              <div className="image-box">
                <Image
                  src={project.description?.split("#")[1] || NotFoundImage}
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
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Projects;
