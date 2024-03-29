import Image from "next/image";
import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";

export const Projects = () => {
  const isMobile = useMediaQuery({ maxWidth: 1279 });

  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (scrollOffset: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: carouselRef.current.scrollLeft + scrollOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      id="projects"
      className="flex flex-col justify-center items-center bg-gray-200 mt-10"
    >
      <p className="text-4xl text-black text-center font-bold">Projects</p>

      <div
        className="mt-10 overflow-x-auto bg-neutral bg-opacity-10"
        ref={carouselRef}
      >
        <div
          className="flex space-x-4  rounded-sm  px-10 py-10 "
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
              alt={"Project Image"}
              height={800}
              width={900}
            />
          </div>
          <div className="carousel-item px-40">
            <Image
              className="ml-10"
              src={"/assets/projects/quiz.png"}
              alt={"Project Image"}
              height={300}
              width={200}
            />
          </div>
          <div className="carousel-item px-28 py-4">
            <Image
              src={"/assets/projects/login.png"}
              alt={"Project Image"}
              height={200}
              width={200}
            />
          </div>
          <div className="carousel-item">
            <Image
              src={"/assets/projects/post.png"}
              alt={"Project Image"}
              height={800}
              width={500}
            />
          </div>
          {!isMobile && (
            <>
              <button
                className="absolute z-2 mt-44 left-10 transform -translate-y-1/2 bg-black bg-opacity-50 px-4 py-2 rounded-lg"
                onClick={() => scroll(-500)}
              >
                {"<"}
              </button>
              <button
                className="absolute z-2 mt-44 right-10 transform -translate-y-1/2 bg-black bg-opacity-50 px-4 py-2 rounded-lg "
                onClick={() => scroll(500)}
              >
                {">"}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
