import React from "react";
import Lottie from "react-lottie";
import animationData from "../../public/assets/lottie/meAnimation.json";
import { useTypewriter, Cursor } from "react-simple-typewriter";

type Props = {};

export default function About({}: Props) {
  const [text] = useTypewriter({
    words: ["Web developer", "Mobile developer", "Backend developer"],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <div
      id="home"
      className="xl:container mx-auto flex flex-col xl:flex-row justify-between items-center w-full mt-32"
    >
      <div className="flex flex-col text-black ml-12 mr-10">
        <div className="flex items-center">
          <br />
          <p className=" text-2xl xl:text-5xl text-black ml-4">I&apos;m a </p>
          <span className="font-bold text-2xl xl:text-5xl text-black ml-4">
            {text}
          </span>
          <span className="text-black xl:text-5xl">
            <Cursor />
          </span>
        </div>
        <br />
        <div className="text-md">
          I am Ahmed Khaled Farag, a passionate and ambitious developer with
          extensive experience in building web, mobile, and backend
          applications. With a solid foundation in React, Next.js, Kotlin,
          Flutter, React Native, and NestJS, I am well-equipped to handle
          diverse projects and challenges.
        </div>
      </div>
      <div className="mr-12">
        <Lottie options={defaultOptions} height={500} width={500} />
      </div>
    </div>
  );
}
