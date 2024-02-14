import React from "react";
import Lottie from "react-lottie";
import { useMediaQuery } from "react-responsive";
import animationData from "../../public/assets/lottie/human.json";

type Props = {};

export const Description = (props: Props) => {
  const isMobile = useMediaQuery({ maxWidth: 1279 });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <div id="about" className="mt-10">
      <p className="text-4xl text-black text-center font-bold ">About Me</p>

      {isMobile && (
        <div>
          <Lottie options={defaultOptions} height={500} width={500} />
        </div>
      )}

      <div className="flex justify-between text-black ml-12 mt-10">
        <div className="flex flex-col gap-12">
          <div>
            <p className="text-2xl font-medium">My Journey:</p>
            <ul className="mt-2">
              <li>
                I started my journey as a mobile developer, mastering Kotlin,
                Flutter, React, and React Native along the way. As my passion
                for software development grew, I delved into backend development
                using NestJS, completing my full-stack expertise.
              </li>
              <li>
                Experienced in crafting responsive and user-friendly UI/UX
                designs to enhance the overall user experience.
              </li>
            </ul>
          </div>
          <div>
            <p className="text-2xl font-medium ml-">Why Choose Me?</p>
            <ul className=" list-disc pl-6 mt-2">
              <li className="mb-2">
                <span className="font-bold">Versatility:</span> I am proficient
                in a wide range of technologies, enabling me to tackle any
                project requirement.
              </li>
              <li className="mb-2">
                <span className="font-bold">Passion:</span> I am deeply
                passionate about coding and continuously strive to learn and
                adapt to new technologies and industry best practices.
              </li>
              <li className="mb-2">
                <span className="font-bold">Commitment:</span> I am dedicated to
                delivering high-quality solutions that meet and exceed client
                expectations, ensuring satisfaction and success.
              </li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-center">
              If you&apos;re looking for a skilled and dedicated full-stack developer
              to bring your ideas to life, let&apos;s connect! I am excited to
              collaborate on your next project and turn your vision into
              reality.
            </p>
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
};
