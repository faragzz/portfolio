import React from "react";
import Lottie from "react-lottie";
import { useMediaQuery } from "react-responsive";
import animationData from "../../public/assets/lottie/web.json";
type Props = {};

export default function Skills({}: Props) {
  const isMobile = useMediaQuery({ maxWidth: 1279 });

  const defaultOptions = {
    autoplay: true,
    animationData: animationData,
  };
  return (
    <div id="skills" className="xl:container mx-auto mt-20 ">
      <p className="text-4xl text-black text-center font-bold ">Skills</p>
      {isMobile && (
        <div>
          <Lottie options={defaultOptions} height={500} width={500} />
        </div>
      )}
      <div className="flex justify-between text-black ml-12 mt-10">
        <div className="flex flex-col gap-12">
          <div>
            <p className="text-2xl font-medium">Web Development</p>
            <ul className="mt-2">
              <li>
                Proficient in React.js and Next.js for building fast, scalable,
                and SEO-friendly web applications.
              </li>
              <li>
                Experienced in crafting responsive and user-friendly UI/UX
                designs to enhance the overall user experience.
              </li>
            </ul>
          </div>
          <div>
            <p className="text-2xl font-medium">Mobile Development</p>
            <ul className="mt-2">
              <li>
                Skilled in Kotlin for native Android app development, ensuring
                high performance and reliability.
              </li>
              <li>
                Proficient in Flutter and React Native for cross-platform mobile
                development, delivering beautiful and feature-rich mobile
                applications for both iOS and Android platforms.
              </li>
            </ul>
          </div>
          <div>
            <p className="text-2xl font-medium">Backend Development</p>
            <ul className="mt-2">
              <li>
                Expertise in NestJS, a modern and efficient Node.js framework,
                for building robust and scalable backend APIs.
              </li>
              <li>
                Capable of designing and implementing complex backend systems to
                support various frontend and mobile applications.
              </li>
            </ul>
          </div>
        </div>
        {!isMobile && (
          <div>
            <Lottie options={defaultOptions} height={500} width={500} />
          </div>
        )}
      </div>
    </div>
  );
}
