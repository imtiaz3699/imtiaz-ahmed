"use client";
import React, { useContext } from "react";
import email from "../../../../photos/email-icon.png";
import copyClipboard from "../../../../photos/copyclipboard.png";
import phone from "../../../../photos/phone.png";
import github from "../../../../photos/Icon Button.png";
import twitter from "../../../../photos/twitter.png";
import figma from "../../../../photos/figm.png";
import { useCopyToClipboard } from "@/app/Hooks/CopyToClipBoard/CopyToClipBoard";
import { StyleContext } from "../../../../../../Contexts/StyleContext";

function GetInTouch() {
  const { isCopied, copyToClipboard } = useCopyToClipboard();
  const [isShow, setIsShow] = React.useState("");
  const style = useContext(StyleContext);
  if (!style) {
    throw Error("style is not defined");
  }
  const {mode} = style;
  const handleCopyText = (text: string) => {
    copyToClipboard(text);
    if (text === isShow) {
      setIsShow("");
    } else {
      setIsShow(text);
    }
    setTimeout(() => {
      setIsShow("");
    }, 1000);
  };
  return (
    <div className={`py-[50px] lg:py-[100px] px-[10px] sm:px-[30px] md:px-[30px] lg:px-[120px]  flex flex-col items-center ${
      mode === "light"
        ? "text-color-dark bg-white"
        : "text-color-light bg-[#030712]"
    }`}>
      <div className="flex flex-col items-cener">
        <div className={`text-center ${
          mode === "light" ? "text-color-dark bg-[#E5E7EB]" : "bg-[#374151]"
        } text-[18px] px-5 py-2 rounded-[25px] text-gray-400 `}>
          Get in touch
        </div>
        {/* className={`text-[20px]  ${
          mode === "light" ? "text-color-dark" : "text-[#4B5563]"
        }`} */}
        <div className={` ${
          mode === "light" ? "text-color-dark" : "text-[#4B5563]"
        } text-[20px] max-w-[576px] w-full mt-[16px] text-center `}>
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </div>
      </div>
      <div className="mt-[48px]">
        <div className="flex flex-row items-center justify-center gap-[20px] ">
          <div></div>
          <img src={email.src} alt="" className={`cursor-pointer ${mode === 'light' ? 'invert' : 'invert-0'}`}/>
          <p className=" text-medium md:font-bold  text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] xl:text-[36px] ">
            imtiazali78652@gmail.com
          </p>
          <div className="relative text-white">
            {isShow === "imtiazali78652@gmail.com" && (
              <span className="absolute bg-[#374151] px-2 py-1 text-[12px]  -top-[50%] rounded-[5px]">
                Copied{" "}
              </span>
            )}
            <img
              src={copyClipboard.src}
              alt=""
              className={`cursor-pointer ${mode === 'light' ? 'invert' : 'invert-0'}`}
              onClick={() => handleCopyText("imtiazali78652@gmail.com")}
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-[20px] ">
          <img src={phone.src} alt="" className={`cursor-pointer ${mode === 'light' ? 'invert' : 'invert-0'}`} />
          <p className="text-medium md:font-bold  text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] xl:text-[36px]">
            +923002089085
          </p>
          <div className="text-white relative">
            {isShow === "+923002089085" && (
              <span className="absolute bg-[#374151] px-2 py-1 text-[12px]  -top-[50%] rounded-[5px]">
                Copied{" "}
              </span>
            )}
            <img
              src={copyClipboard.src}
              alt=""
              className={`cursor-pointer ${mode === 'light' ? 'invert' : 'invert-0'}`}
              onClick={() => handleCopyText("+923002089085")}
              
            />
          </div>
        </div>
      </div>

      <div className="mt-12">
        <p className="text-white">You may also find me on these platforms!</p>
        <div className="flex flex-row items-center gap-5 justify-center">
          <img src={github.src} alt="" className={`w-[50px] h-[50px] ${mode === 'light' ? 'invert' : 'invert-0'} `} />
          <img src={twitter.src} alt="" className={`w-[50px] h-[50px] ${mode === 'light' ? 'invert' : 'invert-0'} `} />
          <img src={figma.src} alt="" className={`w-[50px] h-[50px] ${mode === 'light' ? 'invert' : 'invert-0'} `} />
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
