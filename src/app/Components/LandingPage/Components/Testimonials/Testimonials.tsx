"use client";
import React, { useContext } from "react";
import profile from "../../../../photos/icon-avatar.png";
import { StyleContext } from "../../../../../../Contexts/StyleContext";

function Testimonials() {
  const style = useContext(StyleContext);
  if (!style) {
    throw Error("style is not defined");
  }
  const { mode } = style;
  const cards = [
    {
      img: "",
      description:
        "“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”",
      name: "John Doe",
      position: "Founder - xyz.com",
    },
    {
      img: "",
      description:
        "“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”",
      name: "John Doe",
      position: "Founder - xyz.com",
    },
    {
      img: "",
      description:
        "“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”",
      name: "John Doe",
      position: "Founder - xyz.com",
    },
    {
      img: "",
      description:
        "“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”",
      name: "John Doe",
      position: "Founder - xyz.com",
    },
    {
      img: "",
      description:
        "“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”",
      name: "John Doe",
      position: "Founder - xyz.com",
    },
    {
      img: "",
      description:
        "“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”",
      name: "John Doe",
      position: "Founder - xyz.com",
    },
    {
      img: "",
      description:
        "“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”",
      name: "John Doe",
      position: "Founder - xyz.com",
    },
  ];

  return (
    <div
      className={`${
        mode === "light"
          ? "text-color-dark bg-[#F9FAFB]"
          : "text-color-light bg-[#111827]"
      } py-[50px] lg:py-[100px] px-[10px] sm:px-[30px] md:px-[30px] lg:px-[120px] flex flex-col items-center`}
    >
      <div
        className={` ${
          mode === "light" ? "text-color-dark bg-[#E5E7EB]" : "bg-[#374151]"
        } bg-[#374151] text-[18px] px-5 py-2 rounded-[25px] text-gray-400 text-center `}
      >
        Testimonials
      </div>
      <div
        className={`text-[20px]  ${
          mode === "light" ? "text-color-dark" : "text-[#4B5563]"
        }`}
      >
        Nice things people have said about me.
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 place-items-center gap-4 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12 mt-12">
        {cards?.map((element, idx) => {
          return (
            <div
              key={idx}
              className={` ${mode === 'light' ? 'bg-white text-[#4B5563]' : 'bg-[#1F2937]'}  p-2 sm:p-4 md:p-6 lg:p-8  xl:p-12 text-center w-full max-w-[373px] rounded-[12px] shadow-2xl flex flex-col items-center gap-[24px]`}
            >
              <img src={profile.src} alt="" className="" />
              <div className=" text-[16px]">
                {element?.description}
              </div>
              <div>
                <div className="font-semibold text-[20px]  leading-[28px]">
                  {element?.name}
                </div>
                <div className="text-[14px] ">
                  {element?.position}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Testimonials;
