import React from 'react'
import Lottie from "react-lottie";
import animationData from "../../public/assets/lottie/meAnimation.json";

type Props = {}

export default function About({}: Props) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
      };
  return (
    <div>
              <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  )
}