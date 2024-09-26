"use client";
import React, { useContext } from "react";
import ProfilePhoto from "../../../../photos/profilePhoto.jpg";
import { Inter } from "next/font/google";
import { StyleContext } from "../../../../../../Contexts/StyleContext";
const inter = Inter({ subsets: ["latin"] });
function AboutMe() {
  const style = useContext(StyleContext);
  if (!style) {
    throw Error("style is not defined");
  }
  const { mode } = style;

  return (
    <div
      className={`${
        mode === "light"
          ? "text-color-dark bg-[#F9FAFB]"
          : "text-color-light bg-[#111827]"
      }   px-[10px] w-full sm:px-[30px] md:px-[30px] lg:px-[120px] flex flex-col items-center gap-[50px] justify-center py-[50px] md:py-[100px] ${
        inter.className
      }`}
    >
      <div
        className={` ${
          mode === "light" ? "text-color-dark bg-[#E5E7EB]" : "bg-[#374151]"
        } text-[18px] px-5 py-2 rounded-[25px] text-gray-400 `}
      >
        About me
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center  w-full gap-[50px]">
        <div className="bg-[#374151] h-[240px] w-[230px] flex justify-center md:h-[480px] md:w-[400px] relative">
          <img
            src={ProfilePhoto.src}
            alt=""
            className="absolute md:-right-6 -top-3 md:-top-6  h-[240px] w-[200px]  md:h-[480px] md:w-[400px] border-b-[6px] border-l-[6px] border-r-[6px] md:border-r-0 border-[#111827] "
          />
        </div>
        <div
          className={` md:max-w-[70%] w-full text-[18px]  flex flex-col gap-[20px] ${
            mode === "light" ? "text-color-dark " : "text-[#F9FAFB]"
          }`}
        >
          <div
            className={`${inter.className} text-[30px] font-semibold leading-[36px]   `}
          >
            Curious about me? Here you have it:
          </div>
          <p className="">
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p>
            I began my journey as a web developer in 2015, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more.
          </p>
          <p>
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </p>
          <p>
            When I'm not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            Twitter where I share tech-related bites and build in public, or you
            can follow me on GitHub.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
