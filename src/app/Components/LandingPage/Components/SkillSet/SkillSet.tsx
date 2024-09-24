import React from "react";
import HTML from "../../../../photos/icons/html.png";
import CSS from "../../../../photos/icons/csss.png";
import Javascript from "../../../../photos/icons/icon-javscript.svg";
import Typescript from "../../../../photos/icons/icon-typescript.svg";
import ReactImg from "../../../../photos/icons/icon-react.svg";
import NextJs from "../../../../photos/icons/icon-nextjs.svg";
import NodeJs from "../../../../photos/icons/icon-nodejs.svg";
import ExpressJs from "../../../../photos/icons/icon-express.svg";
import Socket from "../../../../photos/icons/icon-socket.svg";
import MongoDb from "../../../../photos/icons/icon-mongodb.svg";
import Tailwindcss from "../../../../photos/icons/icon-tailwindcss.svg";
import AntD from "../../../../photos/icons/icon-antd.svg";
import Git from "../../../../photos/icons/icon-git.svg";
import Github from "../../../../photos/icons/github.png";
import Bootstrap from "../../../../photos/icons/bootstrap.png";
import MUI from "../../../../photos/icons/mui.svg";
import ReactQuery from "../../../../photos/icons/reactquery.png";

function SkillSet() {
  const data = [
    {
      skill: "HTML",
      img: HTML,
    },
    {
      skill: "CSS",
      img: CSS,
    },
    {
      skill: "Javascript",
      img: Javascript,
    },
    {
      skill: "Typescript",
      img: Typescript,
    },
    {
      skill: "React",
      img: ReactImg,
    },
    {
      skill: "Next.Js",
      img: NextJs,
    },
    {
      skill: "Node.Js",
      img: NodeJs,
    },
    {
      skill: "Express.Js",
      img: ExpressJs,
    },
    {
      skill: "Socket.Js",
      img: Socket,
    },
    {
      skill: "MongoDB",
      img: MongoDb,
    },
    {
      skill: "Tailwindcss",
      img: Tailwindcss,
    },
    {
      skill: "Ant D",
      img: AntD,
    },
    {
      skill: "Git",
      img: Git,
    },
    {
      skill: "GitHub",
      img: Github,
    },
    {
      skill: "React Query",
      img: ReactQuery,
    },
    {
      skill: "Material UI",
      img: MUI,
    },
    {
      skill: "Bootstrap",
      img: Bootstrap,
    },
  ];
  return (
    <div className="flex flex-col items-center py-[50px] lg:py-[100px] px-[10px] sm:px-[30px] md:px-[30px] lg:px-[120px]">
      <div className="bg-[#374151] text-[18px] px-5 py-2 rounded-[25px] text-gray-400">
        Skills
      </div>
      <p className="text-[#D1D5DB] text-[20px] mt-2">
        The skills, tools and technologies I am really good at:
      </p>
      <div className="grid grid-cols-3 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-10 w-full mt-[50px]">
        {data?.map((element, idx) => {
          return (
            <div
              key={element.skill}
              className="flex flex-col items-center gap-2"
            >
              <img
                src={element.img.src}
                alt=""
                className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]"
              />
              <p className="text-white text-center">{element?.skill}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SkillSet;
