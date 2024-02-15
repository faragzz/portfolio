"use client";
import About from "./components/about";
import { Description } from "./components/description";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import { Projects } from "./components/projects";
import Skills from "./components/skills";

export default function Home() {
  return (
    <div className="flex flex-col bg-gray-200 w-fit xl:w-full">
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Description />
      <Footer />
    </div>
  );
}
