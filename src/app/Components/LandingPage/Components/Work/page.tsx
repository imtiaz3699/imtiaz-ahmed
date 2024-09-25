import React from "react";
import work from "../../../../photos/work.png";
import exportBtn from "../../../../photos/exportbutton.png";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
function Work() {
  const data = [
    "React",
    "Next.Js",
    "Typescript",
    "Nest Js",
    "Postgresql",
    "Tailwindcss",
    "Figma",
    "Cypress",
    "Storybook",
    "Git",
  ];
  return (
    <div
      className={`py-[50px] lg:py-[100px] px-[10px] sm:px-[30px] md:px-[30px] lg:px-[120px] flex flex-col items-center gap-[48px] ${inter.className}`}
    >
      <div className="flex flex-col items-center justify-center  gap-[10px]">
        <div className="bg-[#374151] text-[18px] px-5 py-2 rounded-[25px] text-gray-400 text-center">
          Work
        </div>
        <div className="text-[20px] text-[#D1D5DB] ">
          Some of the noteworthy projects I have built:
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center ">
        <div className="bg-[#374151] p-6 md:p-8 lg:p-10 xl:p-12 rounded-tl-[12px] rounded-tr-[12px] md:rounded-tr-none md:rounded-bl-[12px] w-full max-w-[576px] h-auto md:h-[480px]">
          <img src={work.src} alt="" className="w-full h-full" />
        </div>
        <div className="bg-[#1F2937] p-6 md:p-8 lg:p-10 xl:p-12 md:rounded-tr-[12px] rounded-bl-[23px] md:rounded-bl-none rounded-br-[12px] flex flex-col gap-6 w-full max-w-[576px] h-auto md:h-[480px]">
          <div className="text-[20px] font-semibold text-[#F9FAFB] ">
            Fiskil
          </div>
          <p className="text-[16px] text-[#D1D5DB] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae.
          </p>
          <div className="flex flex-row gap-[8px] flex-wrap">
            {data.map((element, idx) => (
              <div
                key={idx}
                className="px-5 py-1 bg-[#374151] rounded-full text-[14px] font-medium leading-[20px] text-[#D1D5DB]"
              >
                {element}
              </div>
            ))}
          </div>
          <div>
            <img src={exportBtn.src} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
