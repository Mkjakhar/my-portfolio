import React from "react";
import myFunFacts from "../components/assets/images/svg/my-fun-fucts.svg";
import halfBoxLeft from "../components/assets/images/svg/half-box-left.svg";
import fourLineDots from "../components/assets/images/svg/four-line-dots.svg";

const MyFunFacts = () => {
  return (
    <div className=" my-12 md:mt-24 md:mb-24 xl:mb-40 relative">
      <img
        src={halfBoxLeft}
        alt="halfBoxLeft"
        className=" absolute top-[30%] hidden xl:inline-block"
      />
      <img
        src={fourLineDots}
        alt="fourLineDots"
        className=" absolute right-0 bottom-[-100px]  hidden xl:inline-block"
      />
      <div className="px-3 container xl:max-w-[1100px] 3xl:max-w-[1140px] mx-auto">
        <h2 className=" text-white font-medium ff_fira text-[22px] sm:text-3xl md:text-[32px] sm:text-[32px] relative">
          <span className="text-[#C778DD]">#</span>my-fun-facts
        </h2>
        <div className=" flex flex-wrap mt-7 justify-between">
          <div className=" lg:w-7/12">
            <div className=" flex">
              <p className=" border border-[#ABB2BF]  text-[13px] sm:t[16px]] ff_fira  text-[#ABB2BF] p-2">
                I like winter more than summer
              </p>
              <p className=" ms-4 border border-[#ABB2BF]  text-[13px] sm:t[16px] ff_fira  text-[#ABB2BF] p-2">
                I often bike with my friends{" "}
              </p>
            </div>
            <div className=" flex my-4">
              <p className=" border border-[#ABB2BF]  text-[13px] sm:t[16px] ff_fira  text-[#ABB2BF] p-2">
                I like <span className=" text-white">pizza</span> and{" "}
                <span className=" text-white">pasta</span>
              </p>
              <p className=" ms-4 border border-[#ABB2BF]  text-[13px] sm:t[16px] ff_fira  text-[#ABB2BF] p-2">
                I was in Egypt, Poland and Turkey
              </p>
            </div>
            <div className=" flex ">
              <p className=" border border-[#ABB2BF]  text-[13px] sm:t[16px] ff_fira  text-[#ABB2BF] p-2">
                My favorite movie is
                <span className=" text-white"> The Green Mile </span>
              </p>
              <p className=" ms-4 border border-[#ABB2BF] text-[13px] sm:t[16px] ff_fira  text-[#ABB2BF] p-2">
                I am still in school
              </p>
            </div>
            <div className=" mt-4">
              <p className=" inline-block border border-[#ABB2BF]  text-[13px] sm:t[16px] ff_fira  text-[#ABB2BF] p-2">
                I don’t have any siblings
              </p>
            </div>
          </div>
          <div className=" hidden lg:inline-block lg:w-3/12">
            <img src={myFunFacts} alt="myFunFacts" className=" w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFunFacts;
