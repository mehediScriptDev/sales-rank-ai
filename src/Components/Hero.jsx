import React from "react";
import banner from "./images/hero.png";
import minirobo from "./images/minirobo.png";
import { RiLayout4Line } from "react-icons/ri";
import { VscCircleLargeFilled } from "react-icons/vsc";

const Hero = () => {
  return (
    <section className="pb-10 relative mt-10 ">
      <div className="absolute bg-gradient-to-r from-gradient to-togradient rounded-full w-80 h-80 opacity-20 blur-2xl top-0 left-0">

</div>
      <div className="grid grid-cols-1 gap-y-8 md:grid-cols-12 items-center w-10/12 md:w-11/12 mx-auto justify-center">
        <div className="col-span-7">
          <h1 className="md:text-7xl text-6xl pb-3 font-manrope">
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
            <div className="flex flex-col md:flex-row gap-y-2 md:gap-5">
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

          {/* absolute card */}
          <div className="absolute top-[44rem] right-20 md:top-48 md:right-20 lg:right-[15rem] xl:right-[19rem] bg-white px-4 md:px-6 py-6 rounded-md w-[17rem] xs:w[10rem] md:w-[19rem] shadow-md">
            <div className="flex justify-between">
              <p className="text-3xl font-semibold text-btnbg">721+</p>
              <p className="text-3xl font-semibold text-btnbg">1000+</p>
            </div>
            <h1 className="font-manrope font-semibold text-xl pb-6 pt-4">Growth is our priority.</h1>
            <p className="text-sm max-w-md text-gray-600">As a full-service business agency, we specialize in helping companies of all sizes optimize their operations</p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
