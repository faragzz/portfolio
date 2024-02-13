import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export const Navbar = (props: Props) => {
  const imgSrc = "/assets/a.jpg";
  return (
    <div className="flex bg-slate-200 z-2 shadow-lg  py-4 bg-opacity-80">
      <div className="ml-4 text-3xl">
        <Image
          className="rounded-lg"
          src={"/assets/a.jpg"}
          alt={"Logo"}
          width={60}
          height={50}
        ></Image>
      </div>
      {/* left */}

      <div className="ml-12 flex gap-4 justify-center items-center text-black">
        <Link className="hover:font-bold" href={"#"}>
          Home
        </Link>
        <Link className="hover:font-bold" href={""}>
          About
        </Link>
        <Link className="hover:font-bold" href={""}>
          skills
        </Link>
        <Link className="hover:font-bold" href={""}>
          contact
        </Link>
      </div>
      {/* right */}
      <div className="ml-auto mr-4">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1">
            Resume
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/resume/Ahmed_Khaled_Web_Resume.pdf" download>
                Web
              </a>
            </li>
            <li>
              <a href="/resume/Ahmed_Khaled_Mobile_Resume.pdf" download>
                Mobile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
