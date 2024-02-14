import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Link as ScrollLink } from "react-scroll";

type Props = {};

export const Navbar = (props: Props) => {
  return (
    <div className="fixed flex bg-slate-200 z-10 shadow-lg  py-2 bg-opacity-95 w-full top-0">
      <div className="ml-4 text-3xl">
        <Image
          className="rounded-lg mr-12"
          src={"/assets/a_logo.png"}
          alt={"Logo"}
          width={60}
          height={50}
        ></Image>
      </div>

      {/* left */}

      <div className=" flex gap-2 xl:gap-4 items-center  text-black">
        <ScrollLink to="home" smooth={true} duration={500} offset={-128}>
          <button> Home</button>
        </ScrollLink>
        <ScrollLink to="skills" smooth={true} duration={500} offset={-100}>
          <button> Skills</button>
        </ScrollLink>
        <ScrollLink to="projects" smooth={true} duration={500} offset={-100}>
          <button> Projects</button>
        </ScrollLink>
        <ScrollLink to="about" smooth={true} duration={500} offset={-100}>
          <button> About</button>
        </ScrollLink>

        <ScrollLink to="contact" smooth={true} duration={500}>
          <button> Contacts</button>
        </ScrollLink>
      </div>
      {/* right */}
      <div className="ml-auto mr-4">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1">
            Resume
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box "
          >
            <li>
              <a href="/resume/Ahmed Khaled Resume web.pdf" download>
                Web
              </a>
            </li>
            <li>
              <a href="/resume/Ahmed Khaled Resume mobile.pdf" download>
                Mobile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
