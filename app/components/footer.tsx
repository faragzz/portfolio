import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content mt-20">
      <Image
        className="rounded-md"
        src={"/assets/a.jpg"}
        alt={"Logo"}
        width={100}
        height={100}
      />

      <nav>
        <h6 className="footer-title">contact me</h6>
        <div className="grid grid-cols-4 gap-4">
          <Link href={"mailto:a.khaled46462@gmail.com"} target="_blank">
            <Image
              src={"/assets/icons/gmail.png"}
              alt={"gmail"}
              height={50}
              width={50}
            />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/ahmedkhaledfarag/"}
            target="_blank"
          >
            <Image
              src={"/assets/icons/linkedin.png"}
              alt={"gmail"}
              height={50}
              width={50}
            />
          </Link>
          <Link href={"https://github.com/faragzz"} target="_blank">
            <Image
              src={"/assets/icons/github.png"}
              alt={"gmail"}
              height={50}
              width={50}
            />
          </Link>
          <div className="flex flex-col justify-center items-center">
            <Image
              className="rounded-md"
              src={"/assets/icons/phone.png"}
              alt={"Logo"}
              width={50}
              height={50}
            />
            <p>+201159551489</p>
          </div>
        </div>
      </nav>
    </footer>
  );
};
