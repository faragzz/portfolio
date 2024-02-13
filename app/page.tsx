"use client";
import About from "./components/about";
import { Navbar } from "./components/navbar";
export default function Home() {
  return (
    <div className="bg-gray-300 h-screen">
      <Navbar />
      <About/>
    </div>
  );
}
