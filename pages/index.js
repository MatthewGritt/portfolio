import Head from "next/head";
import { useRef } from "react";
import About from "../components/About";
import Projects from "../components/Projects";

export default function Home() {
  const aboutScroll = useRef(null);
  const makeSmooth = (e) => {
    e.preventDefault();
    window.scrollTo({ top: aboutScroll.current.offsetTop, behavior: "smooth" });
  };
  return (
    <div className=" h-screen my-5">
      <Head>
        <title>Matt portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className=" max-w-5xl mx-auto px-3 md:px-5">
          <nav className="flex items-center  text-sm  text-gray-400">
            <h3 className=" font-bold text-black ">Matthew Gritt</h3>
            <a
              onClick={makeSmooth}
              href="#aboutSkip"
              className="pl-5 cursor-pointer hover:underline"
            >
              About
            </a>
            {/* <a className="pl-5 cursor-pointer hover:underline">Contact</a> */}
          </nav>
          <h2 className="font-bold mt-10 text-3xl">Portfolio</h2>
          <Projects />
        </div>
        <div id="aboutSkip" ref={aboutScroll}>
          <About />
        </div>

        <div className="mt-10 max-w-5xl mx-auto px-3 md:px-5 pb-10">
          <h2 className="text-3xl font-bold">Contact</h2>
          <div className="sm:flex sm:text-[18px] items-center justify-evenly">
            <p className="pt-3">Mobile: 07716990437</p>
            <p className="pt-3">Email: matthew.gritt@yahoo.co.uk</p>
          </div>
        </div>
      </main>
    </div>
  );
}
