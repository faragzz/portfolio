import Image from "next/image";
import React from "react";

type Props = {};

export const Projects = (props: Props) => {
  return (
    <div
      id="projects"
      className="flex flex-col justify-center items-center w-full"
    >
      <p className="text-4xl text-black text-center font-bold">Projects</p>

      <div
        className="mt-10 carousel carousel-center p-10 py-10 space-x-4 bg-neutral rounded-sm w-full bg-opacity-10"
        style={{ height: "500px" }}
      >
        <div className="carousel-item">
          <Image
            src={"/assets/projects/g1.png"}
            alt={"Project Image"}
            height={800}
            width={900}
          />
        </div>
        <div className="carousel-item">
          <Image
            src={"/assets/projects/g2.png"}
            alt={"Project Image "}
            height={800}
            width={900}
          />
        </div>
        <div className="carousel-item">
          <Image
            src={"/assets/projects/portfolio.png"}
            alt={"Project Image "}
            height={800}
            width={900}
          />
        </div>
        <div className="carousel-item px-40">
          <Image
            className="ml-10"
            src={"/assets/projects/quiz.png"}
            alt={"Project Image "}
            height={300}
            width={200}
          />
        </div>
        <div className="carousel-item px-28 py-4">
          <Image
            src={"/assets/projects/login.png"}
            alt={"Project Image "}
            height={200}
            width={200}
          />
        </div>
        <div className="carousel-item">
          <Image
            src={"/assets/projects/post.png"}
            alt={"Project Image "}
            height={800}
            width={500}
          />
        </div>
      </div>
    </div>
  );
};
