import React from "react";
import { projects } from "../components/common/Helper";
import arrowP from "../components/assets/images/svg/Arrow_p.svg";
import dotC from "../components/assets/images/svg/dots-c.svg";
import halfBox from "../components/assets/images/svg/box.svg";

const CompleteApps = () => {
  return (
    <div className=" mt-10 md:mt-14 mb-16 lg:mb-32 relative">
      <img
        src={dotC}
        alt="dotC"
        className=" absolute top-[80%] left-5 hidden xl:block"
      />
      <img
        src={halfBox}
        alt="halfBox"
        className=" hidden xl:block absolute top-[10%] right-0"
      />
      <div className="px-3 container xl:max-w-[1100px] 3xl:max-w-[1140px] mx-auto">
        <h2 className="ff_fira font-semibold text-white text-[22px] sm:text-3xl md:text-[32px]">
          <span className=" text-[#C778DD]">/</span>projects
        </h2>
        <p className=" ff_fira text-[16px] text-white mt-4">
          List of my projects
        </p>
        <h2 className="ff_fira font-semibold text-white text-[22px] sm:text-3xl md:text-[32px] mt-9 lg:mt-16">
          <span className=" text-[#C778DD]">#</span>my-projects
        </h2>

        <div className="flex flex-wrap justify-center md:justify-start md:mt-6">
          {projects.map((val, i) => (
            <div
              key={i}
              className=" w-full group max-w-[375px] md:w-6/12 lg:w-4/12 sm:px-3 mt-6"
            >
              <div className=" border h-full flex flex-col justify-between border-[#ABB2BF]">
                <div>
                  <div className="overflow-hidden">
                    <img
                      src={val.img}
                      alt="map-img"
                      className="w-full group-hover:scale-110 duration-300 h-[200px] object-contain"
                    />
                  </div>
                  <p className=" ff_fira text-[#ABB2BF] py-2 px-2 border-b border-b-[#ABB2BF]">
                    {val.skill}
                  </p>
                  <h2 className=" py-3 sm:py-4 px-4 ff_fira font-medium text-white  max-w-[329px] text-lg sm:text-xl md:text-2xl">
                    {val.projectsName}
                  </h2>
                  <p className=" ff_fira text-[16px] px-4 pb-3 sm:pb-4 text-[#ABB2BF]">
                    {val.servers}
                  </p>
                </div>
                <div>
                  <a
                    href={val.link}
                    target="blank"
                    className="inline-flex items-center mx-4 mb-4 ff_fira font-medium text-white text-[16px] border border-[#ABB2BF] py-2 px-4"
                  >
                    Live
                    <span className=" ms-2">
                      <img src={arrowP} alt="arrowP" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompleteApps;
