import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <footer id="contact" className="p-10 bg-neutral mt-20">
      <div className="flex justify-between">
        <Image
          className="rounded-md"
          src={"/assets/a.jpg"}
          alt={"Logo"}
          width={100}
          height={100}
        />

        <nav className="mr-12">
          <h6 className="footer-title w-full text-center">contact me</h6>
          <div className="flex gap-8">
            <Link href={"mailto:a.khaled46462@gmail.com"} target="_blank">
              <Image
                src={"/assets/icons/gmail.png"}
                alt={"gmail"}
                height={55}
                width={55}
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
              <p className="text-white">+201159551489</p>
            </div>
          </div>
        </nav>
      </div>
    </footer>
  );
};
