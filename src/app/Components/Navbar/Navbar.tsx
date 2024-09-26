"use client";
import React, { useContext, useState } from "react";
import Button from "../Button/Button";
import { Inter } from "next/font/google";
import { Stylish } from "next/font/google";
import { Drawer, Space } from "antd";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { StyleContext } from "../../../../Contexts/StyleContext";
<CiLight />;
const inter = Inter({ subsets: ["latin"] });
const stylish = Stylish({
  weight: "400",
  subsets: ["latin"],
});
function Navbar() {
  const style = useContext(StyleContext);
  if (!style) {
    throw Error("style is not defined");
  }
  const { mode, setMode } = style;

  const navData = ["Home", "Services", "Work", "About us", "Blog"];;
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className={`flex fixed w-full z-50 flex-row items-center justify-between px-[10px] sm:px-[30px] md:px-[30px] lg:px-[120px] py-[25px]  ${mode === 'light' ? 'bg-[#FFFFFF]' : 'bg-[#0A0A0F]'} `}>
      <h1 className={` ${mode === 'light' ? 'text-[#0A0A0F]' : ' text-[#FFFFFF] '}  text-[25px] md:text-[25px] lg:text-[35px] ${stylish.className}`}>
        Imiaz Ahmed <span className="text-green-500 text-[35px]">.</span>{" "}
      </h1>
      <div className="hidden md:flex flex-row gap-[58px]">
        <div className="flex flex-row items-center gap-[38px]  ">
          {navData.map((element, idx) => {
            return (
              <div
                key={element}
                className={` ${mode === 'light' ? 'text-[#0A0A0F]' : ' text-[#FFFFFF] shadow-xl'}  font-bold text-[12px] lg:text-[14px] hover:underline hover:text-gray-400 cursor-pointer transition-all delay-100 ${inter.className}`}
              >
                {element}
              </div>
            );
          })}
        </div>
        <Button
          btnText="Contact"
          className={`${mode === 'light' ? 'text-[#0A0A0F]' : ' text-[#FFFFFF] '}  px-[16px] py-[10px] border-[1px] border-[#079211] hover:border-[#517a53] font-bold text-[12px] md:text-[14px] hover:text-gray-400 ${inter.className}`}
        />
        <div className="cursor-pointer">
          {mode === "dark" ? (
            <CiDark
              onClick={() => setMode("light")}
              className="text-white w-[30px] h-[30px]"
            />
          ) : (
            <CiLight
              onClick={() => setMode("dark")}
              className=" w-[30px] h-[30px]"
            />
          )}
        </div>
      </div>

      <div className="md:hidden">
        <RxHamburgerMenu
          className={` ${mode === 'light' ? 'text-[#0A0A0F]' : ' text-[#FFFFFF] '}`}
          onClick={() => setOpen(!open)}
        />
        <div className="drawer">
        <Drawer
        style = {{backgroundColor: mode === 'light' ? '#FFFFFF' : '#111827',color:mode === 'light' ? '#111827' : ' #FFFFFF' }}
          title="Imtiaz Ahmed"
          // placement={placement}
          width={500}
          onClose={onClose}
          open={open}

          // extra={
          //   <Space>
          //     <Button onClick={onClose} btnText="Cancel"/>
          //     <Button onClick={onClose} btnText = "Ok"/>
          //   </Space>
          // }
        >
          <div className="flex flex-col gap-5">
            {navData.map((element, idx) => {
              return (
                <div
                  key={element}
                  className={`${mode === 'light' ? 'text-[#0A0A0F]' : ' text-[#FFFFFF] '}  text-[16px] hover:underline hover:text-gray-400 cursor-pointer transition-all delay-100 ${inter.className}`}
                >
                  {element}
                </div>
              );
            })}
          </div>
        </Drawer>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
