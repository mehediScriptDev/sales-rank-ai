import React from "react";
import banner from "./images/hero.png";
import minirobo from "./images/minirobo.png";
import { RiLayout4Line } from "react-icons/ri";
import { VscCircleLargeFilled } from "react-icons/vsc";

const Hero = () => {
  return (
    <section className="min-h-screen relative mt-10 w-11/12 mx-auto">
      <div className="grid grid-cols-12 items-center justify-center">
        <div className="col-span-7">
          <h1 className="text-7xl pb-3 font-manrope">
            Your AI- <br /> Powered <br /> Sales Coach
          </h1>
          <div className="flex gap-5 items-center max-w-2xl">
            <img className="border-dashed border-2" src={minirobo} alt="" />
            <p className="text-sm font-manrope">
              Get real-time coaching, script <br /> suggestions, and
              deal-closing <br /> strategies powered by advanced AI <br />{" "}
              technology.
            </p>
          </div>
          <div className="mt-6">
            <div className="flex gap-5">
            <div className="flex gap-3 items-center">
              <span className="bg-white shadow-md px-3 py-2 rounded-md">
                <RiLayout4Line className="text-5xl text-btnbg" />
              </span>
              <div>
                <p className="text-3xl font-semibold">2000+</p>
                <p>Your protection</p>
              </div>
            </div>
            <div className="flex gap-3 items-center ">
              <span className="bg-white shadow-md flex flex-col items-center px-3 py-3 rounded-md">
                <VscCircleLargeFilled className="text-btnbg text-xl" />
                <div className="flex gap-1 text-xl text-btnbg">
                <VscCircleLargeFilled className="" />
                <VscCircleLargeFilled className="" />
                </div>
              </span>
              <div>
                <p className="text-3xl font-semibold">7001+</p>
                <p>Provide tailored</p>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className="col-span-5 h-96">
          <img src={banner} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
